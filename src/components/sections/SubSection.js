/** @jsx jsx */
import { jsx } from "theme-ui"
import Heading from "../ui/Heading"

export default props => (
  <div sx={{ pb: 4 }}>
    <Heading>{props.title}</Heading>
    {props.children}
  </div>
)
