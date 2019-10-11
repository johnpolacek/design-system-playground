/** @jsx jsx */
import { jsx } from "theme-ui"
import useTweenMax from "../../animate/useTweenMax"
import { Back } from "gsap"
import Button from "../ui/Button"

export default props => {
  const [tweenUpRef] = useTweenMax(
    0.5,
    props.animate
      ? {
          startAt: { y: "10vh", opacity: 0 },
          opacity: 1,
          delay: 1,
          y: 0,
          ease: Back.easeOut,
          immediateRender: true,
        }
      : {}
  )

  return (
    <div ref={tweenUpRef} style={{ opacity: 0 }} sx={{ pt: 4 }}>
      <Button sx={{ fontSize: 3 }} onClick={props.onNext}>
        Next <span sx={{ fontWeight: 200 }}>»</span>
      </Button>
    </div>
  )
}
