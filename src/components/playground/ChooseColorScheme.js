/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState, useContext } from "react"
import { ThemeContext, getColorScheme } from "../../context/ThemeContext"
import Choose from "./Choose"
import Flex from "../ui/Flex"
import Button from "../ui/Button"
import ColorSchemeSwatch from "./ColorSchemeSwatch"
import ColorSchemeFromColor from "./ColorSchemeFromColor"
import ColorSchemeFromImage from "./ColorSchemeFromImage"
import ColorSchemeFromPreset from "./ColorSchemeFromPreset"

export default props => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [colors, setColors] = useState(theme.colors)
  const [schemeMode, setSchemeMode] = useState(null)

  const FROM_PRESET = "FROM_PRESET"
  const FROM_COLOR = "FROM_COLOR"
  const FROM_IMAGE = "FROM_IMAGE"

  const onSelectColors = (colors, mode) => {
    let newTheme = { ...theme }
    newTheme.colors = colors
    setTheme({ ...newTheme })
    setColors(colors)
    setSchemeMode(mode)
  }

  const goRandom = () => {
    let newTheme = { ...theme }
    newTheme.colors = getColorScheme()
    setTheme({ ...newTheme })
    setColors(newTheme.colors)
    setSchemeMode(null)
  }

  return (
    <Choose
      top="36px"
      onComplete={props.onComplete}
      title="Get a color scheme..."
    >
      <div sx={{ mt: -3, mb: 3 }}>
        {Object.values(colors)
          .filter(
            color =>
              typeof color === "string" &&
              color.toLowerCase() !== "#fff" &&
              color.toLowerCase() !== "#ffffff" &&
              color !== "#000" &&
              color !== "#000000" &&
              color !== "transparent"
          )
          .map((color, i) => (
            <ColorSchemeSwatch key={"color" + i} i={i} color={color} />
          ))}
      </div>
      <p sx={{ mt: 4, p: 2, mb: -1, ml: "42px" }}>
        <Button
          onClick={goRandom}
          sx={{
            fontSize: 1,
            py: 2,
            px: 3,
            bg: "secondary",
            color: "white",
            fontWeight: 600,
          }}
        >
          go random
        </Button>
        <span sx={{ ml: 3 }}>or...</span>
      </p>
      <Flex sx={{ maxWidth: "960px", mx: "auto" }}>
        <div sx={{ p: 4, width: ["100%", "33.3%"] }}>
          <h3 sx={{ fontWeight: 500, fontSize: 1 }}>From Preset</h3>
          <ColorSchemeFromPreset
            isActive={schemeMode === FROM_PRESET}
            onSelect={colors => onSelectColors(colors, FROM_PRESET)}
          />
        </div>
        <div sx={{ p: 4, width: ["100%", "33.3%"] }}>
          <h3 sx={{ fontWeight: 500, fontSize: 1 }}>From Color</h3>
          <ColorSchemeFromColor
            isActive={schemeMode === FROM_COLOR}
            onSelect={colors => onSelectColors(colors, FROM_COLOR)}
          />
        </div>
        <div sx={{ p: 4, width: ["100%", "33.3%"] }}>
          <h3 sx={{ fontWeight: 500, fontSize: 1 }}>From Image</h3>
          <ColorSchemeFromImage
            isActive={schemeMode === FROM_IMAGE}
            onSelect={colors => onSelectColors(colors, FROM_IMAGE)}
          />
        </div>
      </Flex>
    </Choose>
  )
}
