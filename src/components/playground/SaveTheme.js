/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Container from "./Container"
import Header from "./Header"
import Main from "./Main"
import Flex from "../ui/Flex"
import Button from "../ui/Button"
import ntc from "ntcjs"
import { NavContext, PlaygroundViews } from "../../context/NavContext"

export default props => {
  const { setPlaygroundView, setPlaygroundHeight } = useContext(NavContext)

  const { theme } = useContext(ThemeContext)
  const [myThemes, setMyThemes] = React.useState(
    localStorage.getItem("themes")
      ? JSON.parse(localStorage.getItem("themes"))
      : []
  )

  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [themeName, setThemeName] = useState("")
  const suggestedName = ntc.name(theme.colors.primary)[1]

  const cancel = () => {
    setPlaygroundView(PlaygroundViews.COMPLETE)
    setPlaygroundHeight(0)
  }

  const save = () => {
    if (themeName !== "") {
      const newMyThemes = myThemes.concat([{ name: themeName, ...theme }])
      localStorage.setItem("themes", JSON.stringify(newMyThemes))
      setMyThemes(newMyThemes)
      setPlaygroundView(PlaygroundViews.COMPLETE)
      setPlaygroundHeight(0)
    }
  }

  return (
    <Container top={props.top}>
      <Header animate={!hasPlayed}>Save Theme</Header>
      <Main animate={!hasPlayed} fontFamily={props.fontFamily}>
        <p sx={{ mt: -3, mb: 4 }}>Save this theme by giving it a name.</p>
        <label
          sx={{ display: "block", pb: 2, fontWeight: "bold", fontSize: 0 }}
          htmlFor="themeName"
        >
          Theme Name
        </label>
        <div sx={{ pb: 3, width: "240px", mx: "auto" }}>
          <input
            sx={{ display: "block", width: "100%" }}
            onChange={e => {
              setThemeName(e.target.value)
            }}
            maxLength="20"
            name="themeName"
            id="themeName"
            type="text"
            value={themeName}
          />
          <Flex sx={{ pt: 3 }}>
            <div sx={{ width: "50%" }}>
              <Button
                onClick={cancel}
                sx={{
                  textAlign: "right",
                  bg: "transparent",
                  color: "primary",
                  display: "block",
                  width: "100%",
                  fontSize: 0,
                  py: "6px",
                }}
              >
                Cancel
              </Button>
            </div>
            <div sx={{ width: "50%" }}>
              <Button
                disabled={themeName === ""}
                onClick={save}
                sx={{
                  display: "block",
                  width: "100%",
                  fontSize: 0,
                  py: "6px",
                  bg: themeName === "" ? "gray" : "secondary",
                }}
              >
                Save
              </Button>
            </div>
          </Flex>
        </div>

        <p sx={{ mt: 4, mb: 0, ml: 3, fontSize: 0 }}>
          How about {suggestedName}?{" "}
          <Button
            onClick={e => {
              setThemeName(suggestedName)
            }}
            sx={{ ml: 1, fontSize: 0, px: 2, py: 1 }}
          >
            Yes
          </Button>
        </p>
        <p
          sx={{
            fontSize: 0,
            pt: 4,
            maxWidth: "640px",
            mx: "auto",
            fontStyle: "italic",
            opacity: 0.6,
          }}
        >
          Note: Themes are saved in your browser’s local storage and will not be
          available on a different browser or device. Make sure you download
          your themes for safe keeping.
        </p>
      </Main>
    </Container>
  )
}
