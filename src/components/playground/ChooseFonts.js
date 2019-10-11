/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useContext, useState } from "react"
import { ThemeContext, getRandomFont } from "../../context/ThemeContext"
import FontSelectBrowser from "./FontSelectBrowser"
import FontSelectWeb from "./FontSelectWeb"
import FontWeights from "../sections/typography/FontWeights"
import Choose from "./Choose"
import Button from "../ui/Button"

export default props => {
  const [currFont, setCurrFont] = useState(null)
  const { theme, setTheme } = useContext(ThemeContext)
  const onFontSelect = (fontName, fontFamily) => {
    let newTheme = { ...theme }
    newTheme.fonts[props.fontKey] = fontFamily
    setTheme({ ...newTheme })
    setCurrFont(fontName)
  }

  const onWebFontSelect = (fontName, fontType) => {
    let newTheme = { ...theme }
    newTheme.fonts[props.fontKey] = "'" + fontName + "', " + fontType
    setTheme({ ...newTheme })
    setCurrFont(fontName)
  }

  const goRandom = () => {
    const randomFont = getRandomFont()
    let newTheme = { ...theme }
    newTheme.fonts[props.fontKey] = randomFont.family
    setTheme({ ...newTheme })
    setCurrFont(randomFont.name)
  }

  const selectBody = () => {
    let newTheme = { ...theme }
    newTheme.fonts[props.fontKey] = theme.fonts.body
    setTheme({ ...newTheme })
    setCurrFont(theme.fonts.body.replace(/'/g, "").split(",")[0])
  }

  return (
    <Choose
      onComplete={props.onComplete}
      fontFamily={props.fontKey}
      title={currFont || "What " + props.fontKey + " font do you like?"}
    >
      <div sx={{ mt: -3, mb: 4 }}>
        <FontWeights align="center" fontName="" />
      </div>
      <div sx={{ mb: 4 }}>
        <FontSelectBrowser onSelect={onFontSelect} />
        <FontSelectWeb onSelect={onWebFontSelect} />
        <span
          sx={{
            px: 2,
            fontWeight: "bold",
            display: ["none", "none", "inline"],
          }}
        >
          {" "}
          or{" "}
        </span>
        <Button
          onClick={goRandom}
          sx={{
            fontSize: [0, 1],
            py: 2,
            px: [2, 3],
            mt: [2, 0],
            bg: "secondary",
            color: "white",
            fontWeight: 600,
          }}
        >
          go random
        </Button>
        {props.fontKey !== "body" && (
          <>
            <span sx={{ fontSize: [0, 1], px: [1, 2], fontWeight: "bold" }}>
              {" "}
              or{" "}
            </span>
            <Button
              onClick={selectBody}
              sx={{
                fontSize: [0, 1],
                py: 2,
                px: [2, 3],
                bg: "secondary",
                color: "white",
                fontWeight: 600,
              }}
            >
              use body font
            </Button>
          </>
        )}
      </div>
    </Choose>
  )
}
