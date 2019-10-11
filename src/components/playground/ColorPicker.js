/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useState, useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import useTweenMax from "../../animate/useTweenMax"
import { Expo } from "gsap"

export default props => {
  const { theme, setTheme } = useContext(ThemeContext)

  const [hasPlayed, setHasPlayed] = useState(false)
  useEffect(() => {
    setHasPlayed(true)
  }, [])

  const [tweenRef] = useTweenMax(
    1,
    hasPlayed
      ? {}
      : {
          startAt: {
            scale: 0.5,
            opacity: 0,
          },
          opacity: 1,
          scale: 1,
          delay: 0.25 + Math.random(),
          ease: Expo.easeOut,
        }
  )

  const onColorChange = e => {
    const newColor = e.target.value
    if (/^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
      let newTheme = { ...theme }
      newTheme.colors[props.color] = e.target.value
      setTheme({ ...newTheme })
    }
  }

  const onDelete = e => {
    let newTheme = { ...theme }
    delete newTheme.colors[props.color]
    setTheme({ ...newTheme })
  }

  return (
    <div
      ref={tweenRef}
      style={{ opacity: 0 }}
      sx={{ px: [2, 3], pb: 3, width: ["100px", "130px"] }}
    >
      <div
        sx={{
          mx: "auto",
          height: "36px",
          width: "36px",
          bg: props.color,
          position: "relative",
          boxShadow: "inset 0 0 2px rgba(0,0,0,.25)",
        }}
      >
        {props.canDelete && (
          <div
            onClick={onDelete}
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: "-6px",
              right: "-6px",
              textAlign: "center",
              fontFamily: "Monaco, monospace",
              bg: "red",
              borderRadius: "50%",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              display: "inline-block",
              width: "16px",
              height: "17px",
              lineHeight: 1,
            }}
          >
            ×
          </div>
        )}
      </div>
      <h3
        sx={{
          my: 2,
          fontSize: ["12px", "14px"],
          fontWeight: 400,
          mb: ["2px", 1, 2],
        }}
      >
        {props.color}
      </h3>
      {props.canEdit ? (
        <input
          onChange={onColorChange}
          type="text"
          sx={{ width: ["64px", "96px"], fontSize: ["12px", "14px"] }}
          defaultValue={theme.colors[props.color]}
        />
      ) : (
        <span sx={{ width: ["64px", "96px"], fontSize: ["12px", "14px"] }}>
          {theme.colors[props.color]}
        </span>
      )}
    </div>
  )
}
