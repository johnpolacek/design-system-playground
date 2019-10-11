/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState } from "react"
import Flex from "../ui/Flex"
import { getColorScheme } from "../../context/ThemeContext"

export default props => {
  const [selected, setSelected] = useState(null)

  const onColorChange = e => {
    let newColor = e.target.value
    if (newColor.indexOf("#") !== 0) {
      newColor = "#" + newColor
    }
    if (newColor.length === 7 && /^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
      const newColors = getColorScheme(newColor)
      props.onSelect(newColors)
      setSelected(newColor)
      e.target.value = ""
    }
  }

  return (
    <div>
      <input
        id="colorsFromColor"
        sx={{ bg: "background", color: "text" }}
        onChange={onColorChange}
        type="text"
        placeholder="Enter Hex Color"
        aria-label="Color Scheme from Hex Color Code"
      />
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
          {selected}
        </Flex>
      )}
    </div>
  )
}
