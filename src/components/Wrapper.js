/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default props => {
  const { theme } = useContext(ThemeContext)

  const webfonts = {}
  Object.keys(theme.fonts)
    .map(font => {
      return theme.fonts[font]
    })
    .filter(font => {
      return (
        font.split(",").length === 2 && font.split(",")[0].indexOf("'") === 0
      )
    })
    .map(font => {
      return font.split(",")[0].split("'")[1]
    })
    .forEach(font => {
      webfonts[font] =
        "https://fonts.googleapis.com/css?family=" +
        font.replace(/ /g, "+") +
        ":100,200,300,400,500,600,700,800,900"
    })

  return (
    <>
      <div sx={{ fontFamily: theme.fonts.body }}>{props.children}</div>
      {Object.keys(webfonts).map(webfont => {
        return <link key={webfont} rel="stylesheet" href={webfonts[webfont]} />
      })}
    </>
  )
}
