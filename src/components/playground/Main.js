/** @jsx jsx */
import { jsx } from "theme-ui"
import useTweenMax from "../../animate/useTweenMax"

export default props => {
  const [tweenFadeInRef] = useTweenMax(
    1,
    props.animate
      ? {
          opacity: 1,
          delay: 0.5,
          immediateRender: true,
        }
      : {}
  )

  return (
    <div
      ref={tweenFadeInRef}
      style={{ opacity: 0 }}
      sx={{ px: 2, fontFamily: props.fontFamily || "body" }}
    >
      {props.children}
    </div>
  )
}
