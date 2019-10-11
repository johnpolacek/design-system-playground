/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import {
  ThemeContext,
  getMainColors,
  getOtherColors,
} from "../../context/ThemeContext"
import Choose from "./Choose"
import ColorAdd from "./ColorAdd"
import Flex from "../ui/Flex"
import ColorPicker from "./ColorPicker"

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <Choose onComplete={props.onComplete} title="Here are your colors...">
      <Flex sx={{ pb: 4 }}>
        {getMainColors().map((color, i) => (
          <ColorPicker key={"mainColor" + i} color={color} canEdit={true} />
        ))}
      </Flex>
      <Flex sx={{ px: [0, 2, 4] }}>
        {getOtherColors(theme).map((color, i) => (
          <ColorPicker
            index={i}
            key={"color" + i}
            canDelete={true}
            color={color}
          />
        ))}
      </Flex>
      <ColorAdd />
    </Choose>
  )
}
