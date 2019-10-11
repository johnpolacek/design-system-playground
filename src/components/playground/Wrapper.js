/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, useEffect } from "react"
import { NavContext } from "../../context/NavContext"
import { ThemeContext } from "../../context/ThemeContext"
import { lightness } from "@theme-ui/color"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const { playgroundHeight } = useContext(NavContext)

  const { theme, isDarkMode } = useContext(ThemeContext)
  const [tweenRef] = useTweenMax(
    1,
    hasPlayed
      ? {}
      : {
          startAt: { paddingBottom: "20vh" },
          paddingBottom: "0",
          delay: 2,
          ease: Expo.easeOut,
          immediateRender: true,
        }
  )

  return (
    <div
      id="playground"
      ref={tweenRef}
      sx={{
        pb: "20vh",
        bg: lightness(theme.colors.primary, isDarkMode() ? 0.1 : 0.95),
        color: "text",
      }}
    >
      <div
        sx={{
          display: "flex",
          transition: "height .5s ease-in-out",
          height: playgroundHeight,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
