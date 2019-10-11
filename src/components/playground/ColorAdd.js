/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Button from "../ui/Button"

export default props => {
  const [colorName, setColorName] = useState("")
  const [colorValue, setColorValue] = useState("#")

  const { theme, setTheme } = useContext(ThemeContext)

  const onNameChange = e => {
    setColorName(e.target.value)
  }

  const onColorChange = e => {
    let newColor = e.target.value.toUpperCase()
    if (newColor.indexOf("#") !== 0) {
      newColor = "#" + newColor
    }
    setColorValue(e.target.value)
  }

  const onColorAddConfirm = e => {
    let newTheme = { ...theme }
    newTheme.colors[colorName.toLowerCase().replace(/\s/g, "")] = colorValue
    setTheme({ ...newTheme })
    setColorName("")
    setColorValue("#")
  }

  return (
    <div sx={{ py: 4 }}>
      <h4 sx={{ fontWeight: "500" }}>Add Color</h4>
      <div
        id="addColorPreview"
        sx={{
          mx: "auto",
          height: "36px",
          width: "36px",
          bg: colorValue || "rgba(0,0,0,0)",
          position: "relative",
          boxShadow: "inset 0 0 2px rgba(0,0,0,.25)",
          mb: 3,
        }}
      />
      <div
        sx={{
          textAlign: "right",
          width: "200px",
          mx: "auto",
          position: "relative",
          left: "-24px",
        }}
      >
        <label sx={{ fontSize: 0, mr: 2 }} htmlFor="newColorName">
          Name
        </label>
        <input
          onChange={onNameChange}
          sx={{
            fontSize: 0,
            width: "140px",
            textAlign: "left",
            pl: 2,
            mb: 3,
          }}
          maxLength="16"
          type="text"
          value={colorName}
          name="newColorName"
        />
      </div>
      <div
        sx={{
          textAlign: "right",
          width: "200px",
          mx: "auto",
          position: "relative",
          left: "-24px",
        }}
      >
        <label sx={{ fontSize: 0, mr: 2 }} htmlFor="newColorValue">
          Value
        </label>
        <input
          onChange={onColorChange}
          sx={{ fontSize: 0, width: "140px", textAlign: "left", pl: 2 }}
          type="text"
          name="newColorValue"
          value={colorValue}
          maxLength="7"
        />
      </div>
      <Button
        id="addColor"
        onClick={onColorAddConfirm}
        disabled={
          colorName !== "" &&
          !(
            /^#([0-9A-F]{3}){1,2}$/i.test(colorValue.toUpperCase()) ||
            /^([0-9A-F]{3}){1,2}$/i.test()
          )
        }
        sx={{
          mt: 3,
          fontSize: 1,
          px: 3,
          py: 1,
          bg:
            colorName !== "" && /^#([0-9A-F]{3}){1,2}$/i.test(colorValue)
              ? "secondary"
              : "gray",
        }}
      >
        + Add Color
      </Button>
    </div>
  )
}
