/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Buttons from "./Buttons"
import Link from "../../ui/Link"

export default props => {
  return (
    <>
      <div sx={{ maxWidth: "960px", pb: 3 }}>
        <p>
          <Link href="https://theme-ui.com/">Theme UI</Link> is a framework for
          building UI components with a{" "}
          <Link href="https://theme-ui.com/sx-prop">style props API</Link> that
          follows the{" "}
          <Link href="https://github.com/system-ui/theme-specification">
            System UI Theme Specification
          </Link>{" "}
          for defining{" "}
          <Link href="https://theme-ui.com/theme-spec">theme objects</Link> and{" "}
          <Link href="https://www.lightningdesignsystem.com/design-tokens/">
            design tokens
          </Link>
          .
        </p>
      </div>
      <div sx={{ maxWidth: "1100px" }}>
        <Buttons />
        <p
          sx={{
            py: [2, 3],
            fontSize: [1, 3],
            fontStyle: "italic",
            maxWidth: "1100px",
          }}
        >
          Looking for a good starting point? Check out the{" "}
          <Link href="https://theme-ui.com/getting-started">Theme UI Docs</Link>
          , then try these Theme UI-compatible compononent libraries...
        </p>
      </div>
    </>
  )
}
