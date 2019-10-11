// based on: https://github.com/johnlindquist/use-gsap

import { useRef, useEffect, useCallback } from "react"
import { TweenMax } from "gsap"

export default (duration, options, onMount = true) => {
  let ref = useRef(null)
  let go = useCallback(() => {
    TweenMax.to(ref.current, duration, options)
  }, [duration, options])

  useEffect(() => {
    if (onMount) go()
  }, [ref, go, options, onMount])

  return [ref, go]
}
