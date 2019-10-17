/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import fileDownload from "js-file-download"
import SyntaxHighlighter from "react-syntax-highlighter"
import getCodeTheme from "../../themes/code"
import Section from "./Section"
import Heading from "../ui/Heading"
import Button from "../ui/Button"
import Link from "../ui/Link"

export default props => {
  const { theme } = useContext(ThemeContext)

  const themeSource = "export default " + JSON.stringify(theme, null, 2)

  const downloadTheme = () => {
    fileDownload(themeSource, "theme.js")
  }

  return (
    <Section>
      <div sx={{ maxWidth: "1040px" }}>
        <Heading sx={{ pt: 3, mb: 1 }}>
          Your Theme Object{" "}
          <Button
            sx={{
              position: "relative",
              top: "-2px",
              py: 1,
              px: 2,
              fontSize: ["12px", 0],
              fontWeight: 400,
              m: 2,
            }}
            href="#"
            onClick={downloadTheme}
          >
            download
          </Button>
        </Heading>
        <p>
          The object below represents all the settings that have been applied to
          the active theme in this app. You can make adjustments to fonts and
          colors, then use the generated theme in your projects. For more info,
          check out <Link href="https://system-ui.com/">System UI</Link> or{" "}
          <Link href="https://theme-ui.com/">Theme UI</Link>.
        </p>
        <SyntaxHighlighter language="javascript" style={getCodeTheme(theme)}>
          {themeSource}
        </SyntaxHighlighter>
      </div>
    </Section>
  )
}
