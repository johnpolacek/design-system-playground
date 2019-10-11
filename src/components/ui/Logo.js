/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Heading from "./Heading"
import { lightness } from "@theme-ui/color"

export default props => {
  const { theme, isDarkMode } = useContext(ThemeContext)

  return (
    <>
      <div
        sx={{
          display: "inline-block",
          transform: "scale(.8)",
          opacity: 0.5,
          position: "relative",
          left: ["1px", "1px", "-10px"],
          top: ["-10px", "-10px", "-10px", "2px"],
        }}
      >
        <div
          id="seesaw"
          sx={{
            width: "22px",
            borderBottom: "solid 2px",
            lineHeight: 0,
            mb: "-23px",
          }}
        ></div>
        <br />
        <div sx={{ fontFamily: "Monaco", fontSize: "24px" }}>△</div>
      </div>
      <Heading
        as="h1"
        sx={{
          fontWeight: 400,
          fontSize: [2, 2, 2, 2, 3],
          display: "inline-block",
          m: 0,
          pl: [2, 2, 0],
          position: "relative",
          top: ["8px", "8px", 0],
        }}
      >
        Design System Playground{" "}
        <span
          sx={{
            color: isDarkMode()
              ? lightness(theme.colors.primary, 0.2)
              : "rgba(255,255,255,.5)",
            fontWeight: [400, 400, 400, "bold"],
            fontSize: ["12px", "12px", "12px", "14px"],
            fontStyle: "italic",
            ml: 1,
            mt: [1, 1, 0],
            display: ["block", "block", "block", "inline"],
          }}
        >
          ...powered by{" "}
          <a
            sx={{
              color: isDarkMode()
                ? lightness(theme.colors.primary, 0.2)
                : "#fff",
            }}
            href="https://theme-ui.com/"
          >
            Theme UI
          </a>
        </span>
      </Heading>
    </>
  )
}
