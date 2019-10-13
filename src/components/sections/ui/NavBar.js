/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"

export default props => (
  <div sx={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
    <button
      sx={{
        width: "33.33%",
        bg: "primary",
        borderRadius: 0,
        border: "solid 1px",
        borderColor: "rgba(122,122,122,.25)",
      }}
    >
      Left
    </button>
    <button
      sx={{
        width: "33.33%",
        bg: "gray",
        borderRadius: 0,
        border: "solid 1px",
        borderColor: "rgba(122,122,122,.25)",
      }}
    >
      Middle
    </button>
    <button
      sx={{
        width: "33.33%",
        bg: "gray",
        borderRadius: 0,
        border: "solid 1px",
        borderColor: "rgba(122,122,122,.25)",
      }}
    >
      Right
    </button>
  </div>
)
