/** @jsx jsx */
import { jsx } from "theme-ui"
import useTweenMax from "../../animate/useTweenMax"

export default props => {
  const [tweenRef] = useTweenMax(0.5, { opacity: 1 })
  return <section style={{ opacity: 0 }} ref={tweenRef} {...props} />
}
