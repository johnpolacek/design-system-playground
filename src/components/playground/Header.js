/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Heading from "../ui/Heading"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"

export default props => {
  const [tweenDownRef] = useTweenMax(
    1,
    props.animate
      ? {
          startAt: { y: "-25vh", opacity: 0 },
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
          immediateRender: true,
        }
      : {}
  )

  return (
    <div
      ref={tweenDownRef}
      style={{ opacity: 0 }}
      sx={{ fontFamily: props.fontFamily || "body" }}
    >
      <Heading
        sx={{
          color: "primary",
          fontSize: [3, 4, 5],
          fontWeight: "normal",
          pb: 4,
          px: 3,
          mt: -6,
          fontFamily: props.fontFamily || "heading",
        }}
      >
        {props.children}
      </Heading>
    </div>
  )
}
