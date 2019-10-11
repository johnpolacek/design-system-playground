/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
  // eslint-disable-next-line
  <a href={props.href} sx={{ color: "primary" }} {...props} />
)
