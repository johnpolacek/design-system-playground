/** @jsx jsx */
import { jsx } from "theme-ui"
import Section from "../Section"
import Intro from "./Intro"
import Buttons from "./Buttons"
import Cards from "./Cards"
import Flex from "../../ui/Flex"

export default props => (
  <Section>
    <Flex sx={{ px: [3, 3, 0] }}>
      <div sx={{ width: ["100%", "100%", "50%", "50%", "30%"], pr: [0, 0, 5] }}>
        <Intro />
      </div>
      <div sx={{ width: ["100%", "100%", "50%", "50%", "30%"], px: 2 }}>
        <Buttons />
      </div>
      <div sx={{ width: ["100%", "100%", "100%", "100%", "40%"], pl: 2 }}>
        <Cards />
      </div>
    </Flex>
  </Section>
)
