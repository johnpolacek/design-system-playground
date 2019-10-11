/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Button from "../../ui/Button"

export default props => {
  const { theme } = useContext(ThemeContext)

  const buttonColors = Object.keys(theme.colors).filter(
    color =>
      color !== "white" &&
      color !== "text" &&
      color !== "black" &&
      color !== "background"
  )

  return (
    <div sx={{ pb: [0, 4] }}>
      <p sx={{ fontSize: 1, fontStyle: "italic", opacity: ".8" }}>Buttons</p>
      <div sx={{ pb: 3 }}>
        {buttonColors.map(color => (
          <Button
            key={color + "Button"}
            sx={{
              bg: color,
              mr: 2,
              mb: 2,
              px: [3, 4],
              py: [2, 3],
              fontSize: [1, 2],
            }}
          >
            {color}
          </Button>
        ))}
      </div>
      <div sx={{ pb: 3 }}>
        {buttonColors.map(color => (
          <Button
            key={color + "OutlineButton"}
            outline={color}
            sx={{ mr: 2, mb: 2, px: [3, 4], py: [2, 3], fontSize: [1, 2] }}
          >
            {color}
          </Button>
        ))}
      </div>
    </div>
  )
}
