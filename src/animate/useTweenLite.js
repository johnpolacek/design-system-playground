// based on: https://github.com/johnlindquist/use-gsap

import { useRef, useEffect, useCallback } from "react"
import { TweenLite } from "gsap"

export default (duration, options, onMount = true) => {
  let ref = useRef(null)
  let go = useCallback(() => {
    TweenLite.to(ref.current, duration, options)
  }, [duration, options])

  useEffect(() => {
    if (onMount) go()
  }, [ref, go, options, onMount])

  return [ref, go]
}
