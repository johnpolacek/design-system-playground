/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Link from "../../ui/Link"
import Figure from "../../ui/Figure"

export default props => {
  return (
    <>
      <p sx={{ pb: 3 }}>
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
      <p
        sx={{
          py: [2, 3],
          fontSize: [1, 2, 3],
          fontStyle: "italic",
          maxWidth: "1100px",
          color: "gray",
        }}
      >
        Looking for a good starting point? Check out the{" "}
        <Link href="https://theme-ui.com/getting-started">Theme UI Docs</Link>{" "}
        and try these compononent libraries that are compatible with
        Theme&nbsp;UI.
      </p>
      <Figure
        img="/img/rebass.png"
        alt="Rebass project website"
        href="https://rebassjs.org/"
      >
        <Link
          sx={{ fontSize: 0, fontStyle: "italic" }}
          href="https://rebassjs.org/"
        >
          Rebass
        </Link>
      </Figure>
      <Figure
        img="/img/chakra.png"
        alt="Chakra UI project website"
        href="https://rebassjs.org/"
      >
        <Link
          sx={{ fontSize: 0, fontStyle: "italic" }}
          href="https://chakra-ui.com/"
        >
          Chakra UI
        </Link>
      </Figure>
    </>
  )
}
