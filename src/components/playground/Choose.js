/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"
import Container from "./Container"
import Header from "./Header"
import Main from "./Main"
import NextButton from "./NextButton"

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [tweenOutRef, tweenOut] = useTweenMax(
    0.5,
    {
      opacity: 0,
      x: "-100vw",
      ease: Expo.easeInOut,
      onComplete: props.onComplete,
    },
    false
  )

  return (
    <Container top={props.top} ref={tweenOutRef}>
      <Header animate={!hasPlayed} fontFamily={props.fontFamily || "heading"}>
        {props.title}
      </Header>
      <Main animate={!hasPlayed} fontFamily={props.fontFamily}>
        {props.children}
      </Main>
      <NextButton animate={!hasPlayed} onNext={() => tweenOut()} />
    </Container>
  )
}
