/** @jsx jsx */
import { jsx } from "theme-ui"
import { lightness } from "@theme-ui/color"
// eslint-disable-next-line
import React, { useContext, useEffect, useState } from "react"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"
import { ThemeContext } from "../../context/ThemeContext"
import Button from "./Button"

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [tweenRef] = useTweenMax(
    0.5,
    hasPlayed
      ? {}
      : {
          startAt: { x: "50vw", opacity: 0 },
          opacity: 1,
          x: 0,
          delay: 0.5 + props.index / 10,
          ease: Expo.easeOut,
          immediateRender: true,
          onComplete: props.onCompleteAnimate || null,
        }
  )

  const { theme } = useContext(ThemeContext)

  return (
    <div ref={tweenRef} style={{ opacity: 0 }} sx={{ display: "inline-block" }}>
      <Button
        onClick={props.onClick}
        sx={{
          bg: props.bg || lightness(theme.colors.primary, 0.4),
          fontSize: ["14px", 0],
          px: [3],
          py: [1, 2],
          mt: [2, 3, 0],
          mr: [2, 2, 2, 2, 3],
          mb: [0, 3, 2, 0],
          fontWeight: 600,
          color: props.color,
        }}
      >
        {props.children}
      </Button>
    </div>
  )
}
