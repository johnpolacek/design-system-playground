import React, { useState, createContext } from "react"

const NavContext = createContext({ currSection: "typography" })
const NavSections = ["FONT", "COLOR", "THEME", "UI"]
const PlaygroundViews = {
  WELCOME: "WELCOME",
  FONT_BODY: "FONT_BODY",
  FONT_HEADING: "FONT_HEADING",
  COLOR_SCHEME: "COLOR_SCHEME",
  COLOR_REVIEW: "COLOR_REVIEW",
  COMPLETE: "COMPLETE",
  SAVE: "SAVE",
  LOAD: "LOAD",
}

const NavProvider = ({ children }) => {
  const [currSection, setCurrSection] = useState(NavSections[0])
  const [playgroundHeight, setPlaygroundHeight] = useState(["60vh", "70vh"])
  const [playgroundView, setPlaygroundView] = useState(PlaygroundViews.WELCOME)

  return (
    <NavContext.Provider
      value={{
        currSection,
        setCurrSection,
        playgroundHeight,
        setPlaygroundHeight,
        playgroundView,
        setPlaygroundView,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider, NavSections, PlaygroundViews }
