/** @jsx jsx */
import { jsx } from "theme-ui"
import { BrowserFonts } from "../../context/ThemeContext"

export default props => {
  const onFontSelect = e => {
    if (e.target.value !== "") {
      props.onSelect(
        e.target.options[e.target.selectedIndex].text,
        e.target.value
      )
      e.target.value = ""
    }
  }

  return (
    <select
      sx={{ mr: [0, 0, 2], mb: 2, width: ["90%", "auto"] }}
      id="selectBrowserFont"
      onChange={onFontSelect}
      {...props}
    >
      <option value="">Choose a Browser Font...</option>
      <option disabled> </option>
      <option disabled>────────── sans-serif</option>
      {BrowserFonts.sans.map(font => {
        return (
          <option key={font.name} value={font.family}>
            {font.name}
          </option>
        )
      })}
      <option disabled> </option>
      <option disabled>────────── serif</option>
      {BrowserFonts.serif.map(font => {
        return (
          <option key={font.name} value={font.family}>
            {font.name}
          </option>
        )
      })}
    </select>
  )
}
