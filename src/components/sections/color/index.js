/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Section from "../Section"
import SubSection from "../SubSection"
import Palette from "./Palette"

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <Section>
      <SubSection title="Color Palette">
        <Palette colors={theme.colors} />
      </SubSection>
    </Section>
  )
}
