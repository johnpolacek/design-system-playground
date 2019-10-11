/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState, useEffect } from "react"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [tweenRef] = useTweenMax(
    1,
    hasPlayed
      ? {}
      : {
          startAt: {
            x: Math.random() * 40 - 20,
            y: Math.random() * 40 - 20,
            opacity: 0,
          },
          opacity: 1,
          x: 0,
          y: 0,
          delay: 0.25 + props.i * 0.05,
          ease: Expo.easeOut,
        }
  )
  return (
    <div
      ref={tweenRef}
      key={"color" + props.i}
      style={{ opacity: 0 }}
      sx={{
        mx: 2,
        mb: 2,
        width: "36px",
        height: "36px",
        bg: props.color,
        display: "inline-block",
        boxShadow: "inset 0 0 2px rgba(0,0,0,.25)",
      }}
    />
  )
}
