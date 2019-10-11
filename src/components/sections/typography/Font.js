/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import FontWeights from "./FontWeights"

export default props => (
  <>
    {Object.keys(props.fonts)
      .reverse()
      .filter(fontName => {
        return props.fonts[fontName] !== "inherit"
      })
      .map(fontName => (
        <div
          key={fontName}
          sx={{ fontFamily: props.fonts[fontName], py: 3, opacity: 0.8 }}
        >
          <FontWeights fontName={fontName} />
          <p
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "gray",
              fontStyle: "italic",
            }}
          >
            {props.fonts[fontName]}
          </p>
        </div>
      ))}
  </>
)
