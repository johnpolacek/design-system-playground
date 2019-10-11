/** @jsx jsx */
import { jsx } from "theme-ui"
import { lightness } from "@theme-ui/color"
// eslint-disable-next-line
import React, { useContext, useState, useEffect } from "react"
import fileDownload from "js-file-download"
import {
  ThemeContext,
  getColorScheme,
  getRandomFont,
} from "../context/ThemeContext"
import { NavContext, PlaygroundViews } from "../context/NavContext"
import Logo from "./ui/Logo"
import GithubLink from "./ui/GithubLink"
import HeaderButton from "./ui/HeaderButton"
import Button from "./ui/Button"

export default props => {
  const { playgroundView, setPlaygroundView, setPlaygroundHeight } = useContext(
    NavContext
  )

  const { theme, setTheme, isDarkMode } = useContext(ThemeContext)

  const editTheme = () => {
    setPlaygroundView(PlaygroundViews.FONT_BODY)
    setPlaygroundHeight("800px")
  }

  const downloadTheme = () => {
    fileDownload("export default " + JSON.stringify(theme, null, 2), "theme.js")
  }

  const randomTheme = () => {
    let newTheme = { ...theme }
    newTheme.colors = getColorScheme()

    const randomBodyFont = getRandomFont()
    newTheme.fonts.body = randomBodyFont.family

    const randomHeadingFont = getRandomFont()
    newTheme.fonts.heading = randomHeadingFont.family
    setTheme({ ...newTheme })
  }

  const loadTheme = () => {
    setPlaygroundView(PlaygroundViews.LOAD)
    setPlaygroundHeight("100vh")
  }

  const saveTheme = () => {
    setPlaygroundView(PlaygroundViews.SAVE)
    setPlaygroundHeight("800px")
  }

  return (
    <header
      sx={{
        display: "flex",
        flexWrap: "wrap",
        bg: "primary",
        color: isDarkMode() ? lightness(theme.colors.primary, 0.2) : "#fff",
        px: [2, 3, 4],
        pt: [1, 2, 3],
        pb: [3],
      }}
    >
      <div sx={{ position: "relative", width: ["100%", "100%", "40%", "50%"] }}>
        <Logo />
      </div>
      <div
        sx={{
          pt: [3, 3, 0],
          pr: [4, 0, 2, 2, 3],
          pl: [4, 0],
          width: ["100%", "100%", "60%", "50%"],
          textAlign: ["center", "center", "right"],
        }}
      >
        {playgroundView !== PlaygroundViews.WELCOME ? (
          <>
            <HeaderButton onClick={loadTheme} index={0}>
              load
            </HeaderButton>
            <HeaderButton onClick={saveTheme} index={1}>
              save
            </HeaderButton>
            <HeaderButton onClick={editTheme} index={2}>
              play
            </HeaderButton>
            <HeaderButton onClick={downloadTheme} index={3}>
              download
            </HeaderButton>
            <HeaderButton onClick={randomTheme} index={4} bg="secondary">
              random
            </HeaderButton>
          </>
        ) : (
          <Button
            sx={{
              opacity: 0,
              fontSize: ["14px", 0],
              px: 3,
              py: 2,
              mt: [2, 3, 0],
              mr: [2, 2, 2, 2, 3],
              mb: [1, 3, 2, 0],
              fontWeight: 600,
              color: props.color,
            }}
          >
            Skip
          </Button>
        )}
        <GithubLink />
      </div>
    </header>
  )
}
