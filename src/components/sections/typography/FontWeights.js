/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState, useEffect } from "react"
import useTweenMax from "../../../animate/useTweenMax"
import { Back } from "gsap"

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  return (
    <>
      <h3 sx={{ fontSize: ["12px", 0], fontWeight: 400, m: 0, px: 2 }}>
        {props.fontName}
      </h3>
      <p sx={{ fontSize: [0, 1, 3, 4], px: 2 }}>
        The quick brown fox jumps over the lazy dog.
      </p>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pb: 2,
          justifyContent: props.align || "left",
        }}
      >
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, i) => {
          const [tweenRef] = useTweenMax(
            0.5,
            hasPlayed
              ? {}
              : {
                  startAt: { y: "20px", opacity: 0, scale: 0.5 },
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  delay: 0.5 + i * 0.05,
                  ease: Back.easeOut,
                  immediateRender: true,
                }
          )
          return (
            <div
              ref={tweenRef}
              key={weight}
              style={{ opacity: 0 }}
              sx={{
                textAlign: "center",
                mx: 1,
                mb: 2,
                border: "solid 1px",
                borderColor: "gray",
                bg: "#fff",
              }}
            >
              <div sx={{ fontWeight: weight, fontSize: [1, 2], p: [2, 3] }}>
                Aa
              </div>
              <div
                sx={{
                  borderTop: "solid 1px",
                  borderColor: "gray",
                  pt: 1,
                  pb: 2,
                  px: [1, 2, 3],
                  color: "gray",
                  fontSize: ["12px", 0],
                }}
              >
                {weight}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
