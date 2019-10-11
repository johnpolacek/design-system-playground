/** @jsx jsx */
import { jsx } from "theme-ui"
import Section from "../Section"
import SubSection from "../SubSection"
import Intro from "./Intro"
import Rebass from "./Rebass"
import Chakra from "./Chakra"

export default props => (
  <Section>
    <Intro />
    <SubSection title="Rebass">
      <Rebass />
    </SubSection>
    <SubSection title="Chakra UI">
      <Chakra />
    </SubSection>
  </Section>
)
