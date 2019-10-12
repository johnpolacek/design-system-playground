/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"

export default props => (
  <figure sx={{ m: 0, textAlign: "center", pb: 4 }} {...props}>
    <img
      sx={{
        width: "100%",
        mb: 1,
        border: "1px solid",
        borderColor: "rgba(122,122,122,.2)",
      }}
      src={props.img}
      alt={props.alt}
    />
    <figcaption>{props.children}</figcaption>
  </figure>
)
