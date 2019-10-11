/** @jsx jsx */
import { jsx } from "theme-ui"
import { WebFonts } from "../../context/ThemeContext"

export default props => {
  const onSelect = e => {
    if (e.target.value !== "") {
      const fontName = e.target.value.split(",")[0]
      const fontType = e.target.value.split(",")[1]
      props.onSelect(fontName, fontType)
      e.target.value = ""
    }
  }

  return (
    <select
      sx={{ mb: 2, width: ["90%", "auto"] }}
      id="selectWebFont"
      onChange={onSelect}
      {...props}
    >
      <option value="">Choose a Web Font...</option>
      <option disabled> </option>
      <option disabled>────────── sans-serif</option>
      {WebFonts.sans.map(fontName => {
        return (
          <option key={fontName} value={fontName + ",sans-serif"}>
            {fontName}
          </option>
        )
      })}
      <option disabled>────────── serif</option>
      {WebFonts.serif.map(fontName => {
        return (
          <option key={fontName} value={fontName + ",serif"}>
            {fontName}
          </option>
        )
      })}
    </select>
  )
}
