/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default props => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <button
      sx={{
        bg: props.outline ? "transparent" : "primary",
        color: props.outline || isDarkMode() ? "#000" : "#fff",
        boxShadow: props.outline ? "0px 0px 0px 2px inset" : "none",
      }}
      {...props}
    />
  )
}
