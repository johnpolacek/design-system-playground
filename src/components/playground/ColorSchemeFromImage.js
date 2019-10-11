/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState } from "react"
import { isDark } from "../../context/ThemeContext"
import ColorThief from "colorthief"
import rgbHex from "rgb-hex"
import ntc from "ntcjs"

export default props => {
  const [image, setImage] = useState(null)
  const colorThief = new ColorThief()

  const onFileSelect = e => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = event => {
      setImage(event.target.result)
    }
  }

  const onImageLoad = e => {
    const colors = colorThief.getPalette(e.target)
    let newColors = {}
    colors.forEach((color, index) => {
      const colorVal = "#" + rgbHex("rgb(" + color.toString() + ")")
      if (index === 0) {
        newColors.primary = colorVal
      } else if (index === 1) {
        newColors.secondary = colorVal
      } else {
        const colorName = ntc
          .name(colorVal)[1]
          .toLowerCase()
          .split(" ")
          .pop()
        newColors[colorName] = colorVal
      }
    })
    newColors.background = isDark(newColors.primary) ? "#fff" : "#000"
    newColors.text = isDark(newColors.primary) ? "#000" : "#fff"
    props.onSelect(newColors)
  }

  return (
    <>
      <input
        id="colorsFromImage"
        onChange={onFileSelect}
        sx={{ width: "240px", bg: "background", color: "text" }}
        aria-label="Choose image file to create color scheme"
        type="file"
      />
      {image ? (
        <img
          onLoad={onImageLoad}
          sx={{
            width: "auto",
            height: "120px",
            mt: 4,
            opacity: props.isActive ? 1 : 0,
          }}
          src={image}
          alt="Color Scheme Generated"
        />
      ) : (
        <div sx={{ width: "120px", height: "120px", mt: 4 }} />
      )}
    </>
  )
}
