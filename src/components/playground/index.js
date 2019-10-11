/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext } from "react"
import { NavContext, PlaygroundViews } from "../../context/NavContext"
import Wrapper from "./Wrapper"
import Welcome from "./Welcome"
import WelcomeBack from "./WelcomeBack"
import ChooseFonts from "./ChooseFonts"
import ChooseColors from "./ChooseColors"
import ChooseColorScheme from "./ChooseColorScheme"
import LoadTheme from "./LoadTheme"
import SaveTheme from "./SaveTheme"

export default props => {
  const { setPlaygroundHeight, playgroundView, setPlaygroundView } = useContext(
    NavContext
  )

  const [myThemes] = React.useState(typeof window !== 'undefined' && window.localStorage.getItem("themes") || null)

  const onStepsComplete = () => {
    setPlaygroundHeight(0)
    setPlaygroundView(PlaygroundViews.COMPLETE)
  }

  return (
    <Wrapper>
      {myThemes ? <WelcomeBack /> : <Welcome />}
      {playgroundView === PlaygroundViews.FONT_BODY && (
        <ChooseFonts
          fontKey="body"
          onComplete={() => {
            setPlaygroundView(PlaygroundViews.FONT_HEADING)
            setPlaygroundHeight(["1400px", "140vh"])
          }}
        />
      )}
      {playgroundView === PlaygroundViews.FONT_HEADING && (
        <ChooseFonts
          fontKey="heading"
          onComplete={() => {
            setPlaygroundView(PlaygroundViews.COLOR_SCHEME)
          }}
        />
      )}
      {playgroundView === PlaygroundViews.COLOR_SCHEME && (
        <ChooseColorScheme
          onComplete={() => {
            setPlaygroundView(PlaygroundViews.COLOR_REVIEW)
          }}
        />
      )}
      {playgroundView === PlaygroundViews.COLOR_REVIEW && (
        <ChooseColors onComplete={onStepsComplete} />
      )}
      {playgroundView === PlaygroundViews.LOAD && <LoadTheme />}
      {playgroundView === PlaygroundViews.SAVE && <SaveTheme />}
    </Wrapper>
  )
}
