/** @jsx jsx */
import { jsx } from "theme-ui"
import { lightness } from "@theme-ui/color"
// eslint-disable-next-line
import React, { useContext } from "react"
import Flex from "./ui/Flex"
import { ThemeContext } from "../context/ThemeContext"

export default props => {
  const { theme, isDarkMode } = useContext(ThemeContext)

  return (
    <>
      <footer
        sx={{
          p: 4,
          fontSize: 0,
          bg: isDarkMode() ? lightness(theme.colors.primary, 0.1) : "primary",
          color: isDarkMode() ? "primary" : "#fff",
        }}
      >
        <Flex>
          <div sx={{ width: ["100%", "50%"] }}>
            <p sx={{ mb: 2 }}>
              Open Sourced on{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://github.com/johnpolacek/design-system-playground"
              >
                Github
              </a>
            </p>
            <p sx={{ mb: 2 }}>
              Built with{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://www.gatsbyjs.org/"
              >
                Gatsby
              </a>
            </p>
            <p sx={{ mb: 2 }}>
              Styled by{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://theme-ui.com/"
              >
                Theme UI
              </a>
            </p>
            <p sx={{ mb: 2 }}>
              Deployed to{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://www.netlify.com/"
              >
                Netlify
              </a>
            </p>
          </div>
          <div sx={{ width: ["100%", "50%"], textAlign: ["left", "right"] }}>
            <p sx={{ mb: 2 }}>Built by John Polacek</p>
            <p sx={{ mb: 2 }}>
              Website:{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://johnpolacek.com/"
              >
                johnpolacek.com
              </a>
            </p>
            <p sx={{ mb: 2 }}>
              Twitter:{" "}
              <a
                sx={{
                  fontWeight: 600,
                  color: isDarkMode()
                    ? lightness(theme.colors.primary, 0.8)
                    : "#fff",
                }}
                href="https://twitter.com/johnpolacek/"
              >
                @johnpolacek
              </a>
            </p>
          </div>
        </Flex>
      </footer>
    </>
  )
}
