/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Container from "./Container"
import Header from "./Header"
import Main from "./Main"
import Button from "../ui/Button"
import { NavContext, PlaygroundViews } from "../../context/NavContext"
import presets from "../../themes/index"

export default props => {
  const [myThemes, setMyThemes] = React.useState(
    localStorage.getItem("themes")
      ? JSON.parse(localStorage.getItem("themes"))
      : null
  )
  const { setPlaygroundView, setPlaygroundHeight } = useContext(NavContext)

  const { setTheme } = useContext(ThemeContext)

  const modes = {
    LOAD: "LOAD",
    DELETE: "DELETE",
  }

  const [mode, setMode] = useState(modes.LOAD)

  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const cancel = () => {
    setPlaygroundView(PlaygroundViews.COMPLETE)
    setPlaygroundHeight(0)
  }

  const load = themeIndex => {
    setPlaygroundView(PlaygroundViews.COMPLETE)
    setPlaygroundHeight(0)
    setTheme(myThemes[themeIndex])
  }

  const remove = themeIndex => {
    console.log("remove")
    if (myThemes.length === 1) {
      localStorage.clear()
      setMyThemes(null)
    } else {
      const newMyThemes = myThemes.slice(0)
      newMyThemes.splice(themeIndex)
      localStorage.setItem("themes", JSON.stringify(newMyThemes))
      setMyThemes(newMyThemes)
    }
  }

  const loadPreset = preset => {
    setPlaygroundView(PlaygroundViews.COMPLETE)
    setPlaygroundHeight(0)
    setTheme(presets[preset])
  }

  return (
    <Container top={props.top}>
      <Header animate={!hasPlayed}>
        {mode === modes.LOAD ? "Load" : "Delete"} Theme
      </Header>
      <Main animate={!hasPlayed} fontFamily={props.fontFamily}>
        {mode === modes.LOAD && (
          <p sx={{ mt: -3, mb: 4 }}>
            {myThemes && myThemes.length > 0 ? (
              <>Select one of your themes to load...</>
            ) : (
              <>
                You don’t have any themes saved yet. Click that save button up
                there <span sx={{ position: "relative", top: "-2px" }}>↑</span>
              </>
            )}
          </p>
        )}
        {mode === modes.DELETE && (
          <p sx={{ mt: -3, mb: 4 }}>
            {myThemes && myThemes.length > 0
              ? "Choose themes you would like to remove."
              : "All saved themes have been removed."}
          </p>
        )}
        {myThemes &&
          myThemes.length > 0 &&
          myThemes.map((myTheme, i) => (
            <Button
              key={myTheme.name}
              onClick={() => {
                mode === modes.LOAD ? load(i) : remove(i)
              }}
              sx={{ mx: 2, mb: 3, bg: myTheme.colors.primary }}
            >
              {myTheme.name}
            </Button>
          ))}
        {mode === modes.LOAD && (
          <>
            <p sx={{ mt: 4, mb: 4 }}>Or choose a preset theme...</p>
            <div sx={{ maxWidth: "1100px", px: 3, mx: "auto" }}>
              {Object.keys(presets).map((preset, i) => (
                <Button
                  key={preset}
                  onClick={e => {
                    loadPreset(e.target.textContent)
                  }}
                  sx={{ mx: 2, mb: 3, bg: presets[preset].colors.primary }}
                >
                  {preset}
                </Button>
              ))}
            </div>
          </>
        )}
        <div>
          <Button
            onClick={cancel}
            sx={{ bg: "rgba(0,0,0,0)", color: "primary", mt: 4 }}
          >
            {mode === modes.LOAD ? "Cancel" : "Finish"}
          </Button>
          {myThemes && myThemes.length > 0 && mode === modes.LOAD && (
            <Button
              onClick={() => {
                setMode(modes.DELETE)
              }}
              sx={{ bg: "rgba(0,0,0,0)", color: "red", mt: 4 }}
            >
              Delete
            </Button>
          )}
        </div>
      </Main>
    </Container>
  )
}
