/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { lightness } from "@theme-ui/color"
import useTweenMax from "../animate/useTweenMax"
import { Expo } from "gsap"
import { useContext } from "react"
import { NavContext, NavSections } from "../context/NavContext"
import { ThemeContext } from "../context/ThemeContext"

const NavButton = props => {
  const [tweenRef] = useTweenMax(
    1,
    props.hasPlayed
      ? {}
      : {
          startAt: { y: 10, opacity: 0 },
          opacity: 1,
          y: 0,
          delay: 2 + props.index * 0.2,
          ease: Expo.easeOut,
          immediateRender: true,
        }
  )

  // do not need this once theme-ui bug is fixed - https://github.com/system-ui/theme-ui/issues/360
  const { theme, isDarkMode } = useContext(ThemeContext)

  const { currSection, setCurrSection } = useContext(NavContext)
  const isCurrent = currSection === props.section

  const styleOuter = {
    width: "25%",
    textAlign: "center",
    bg: isCurrent
      ? theme.colors.background
      : lightness(theme.colors.primary, isDarkMode() ? 0.1 : 0.95),
  }

  const styleInner = {
    display: "block",
    fontSize: ["4vw", "3vw", "2.5vw", "2vw"],
    textDecoration: "none",
    py: "4vh",
    opacity: props.hasPlayed ? 1 : 0,
    color: isCurrent ? "primary" : lightness(theme.colors.primary, 0.6),
    ":hover": {
      bg: isCurrent
        ? theme.colors.background
        : lightness(theme.colors.primary, isDarkMode() ? 0.08 : 0.925),
      color: isCurrent ? "primary" : lightness(theme.colors.primary, 0.4),
    },
  }

  return (
    <li sx={styleOuter}>
      {isCurrent ? (
        <span ref={tweenRef} sx={styleInner}>
          {props.section}
        </span>
      ) : (
        <a
          ref={tweenRef}
          sx={styleInner}
          href={"#" + props.section}
          onClick={e => {
            e.preventDefault()
            setCurrSection(e.target.textContent)
          }}
        >
          {props.section}
        </a>
      )}
    </li>
  )
}

export default props => {
  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  return (
    <nav
      sx={{ bg: "background", mb: "-1px", position: "relative", zIndex: 999 }}
    >
      <ul
        sx={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          m: 0,
          p: 0,
          textTransform: "uppercase",
        }}
      >
        {NavSections.map((section, index) => (
          <NavButton
            hasPlayed={hasPlayed}
            key={section}
            section={section}
            index={index}
          />
        ))}
      </ul>
    </nav>
  )
}
