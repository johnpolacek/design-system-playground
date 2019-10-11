/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import useTweenMax from "../animate/useTweenMax"
import { NavContext } from "../context/NavContext"
import { ThemeContext } from "../context/ThemeContext"
import { Typography, Color, Components, Theme } from "./sections"

export default props => {
  const { currSection } = useContext(NavContext)
  const { theme } = useContext(ThemeContext)

  const [tweenRef] = useTweenMax(1, {
    opacity: 1,
    delay: 1,
    immediateRender: true,
  })

  return (
    <main
      sx={{
        py: [4, 5],
        px: [3, 4, 5],
        minHeight: "90vh",
        fontFamily: theme.fonts.body,
        bg: "background",
        color: "text",
      }}
      style={{ opacity: 0 }}
      ref={tweenRef}
    >
      {
        {
          FONT: <Typography />,
          COLOR: <Color />,
          UI: <Components />,
          THEME: <Theme />,
        }[currSection]
      }
    </main>
  )
}
