/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState } from "react"
import { Themes } from "../../context/ThemeContext"
import Flex from "../ui/Flex"

export default props => {
  const [preset, setPreset] = useState(null)

  return (
    <>
      <select
        sx={{ bg: "background", color: "text" }}
        id="colorsPreset"
        name="colorsPreset"
        aria-label="Color Scheme from Preset"
        onChange={e => {
          if (e.target.value) {
            setPreset(e.target.value)
            props.onSelect(Themes[e.target.value].colors)
            e.target.value = ""
          }
        }}
      >
        <option value="">Select a scheme...</option>
        {Object.keys(Themes).map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
      {props.isActive && (
        <Flex
          sx={{
            width: "120px",
            height: "120px",
            bg: "primary",
            color: "white",
            alignItems: "center",
            mx: "auto",
            mt: 4,
          }}
        >
          {preset}
        </Flex>
      )}
    </>
  )
}
