/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Flex from "../../ui/Flex"
import Link from "../../ui/Link"

export default props => (
  <Flex sx={{ width: "100%", pb: 3, alignItems: "flex-start" }}>
    <img
      sx={{ mr: 3 }}
      width="72"
      height="72"
      alt="placeholder for media object component"
      src="https://placeimg.com/320/320/any"
    />
    <p sx={{ flex: 1 }}>
      The{" "}
      <Link href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">
        media object
      </Link>{" "}
      is an image to the left, with descriptive content to the right
    </p>
  </Flex>
)
