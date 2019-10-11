/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Section from "../Section"
import SubSection from "../SubSection"
import Font from "./Font"
import TypeScale from "./TypeScale"

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <Section>
      <SubSection title="Font Families">
        <Font fonts={theme.fonts} />
      </SubSection>
      <SubSection title="Type Scale">
        <TypeScale fontSizes={theme.fontSizes} />
      </SubSection>
    </Section>
  )
}
