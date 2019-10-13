/** @jsx jsx */
import { jsx } from "theme-ui"
import Section from "../Section"
import Intro from "./Intro"
import Buttons from "./Buttons"
import Cards from "./Cards"
import MediaObject from "./MediaObject"
import NavBar from "./NavBar"
import Flex from "../../ui/Flex"

export default props => (
  <Section>
    <Flex sx={{ px: [3, 3, 0] }}>
      <div sx={{ width: ["100%", "100%", "50%", "50%", "30%"], pr: [0, 0, 5] }}>
        <Intro />
      </div>
      <div
        sx={{
          width: ["100%", "100%", "50%", "50%", "30%"],
          pl: 2,
          pr: [2, 2, 2, 2, 4],
        }}
      >
        <Buttons />
        <NavBar />
        <div sx={{ pt: 5, pb: 3 }}>
          <MediaObject />
        </div>
      </div>
      <div sx={{ width: ["100%", "100%", "100%", "100%", "40%"], pl: 2 }}>
        <Cards />
      </div>
    </Flex>
  </Section>
)
