/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Color from "./Color"

export default props => (
  <div sx={{ display: "flex", flexWrap: "wrap" }}>
    {Object.entries(props.colors)
      .filter(
        color =>
          typeof color[1] === "string" && color[0].indexOf("primary") === 0
      )
      .map(color => (
        <Color key={color[0]} colorName={color[0]} colorVal={color[1]} />
      ))}
    {Object.entries(props.colors)
      .filter(
        color =>
          typeof color[1] === "string" && color[0].indexOf("secondary") === 0
      )
      .map(color => (
        <Color key={color[0]} colorName={color[0]} colorVal={color[1]} />
      ))}
    {Object.entries(props.colors)
      .filter(
        color =>
          typeof color[1] === "string" &&
          color[0].indexOf("text") === 0 &&
          color[1] !== "#fff" &&
          color[1] !== "#ffffff" &&
          color[1] !== "#000" &&
          color[1] !== "#000000"
      )
      .map(color => (
        <Color key={color[0]} colorName={color[0]} colorVal={color[1]} />
      ))}
    {Object.entries(props.colors)
      .filter(
        color =>
          typeof color[1] === "string" &&
          color[0].indexOf("background") === 0 &&
          color[1] !== "#fff" &&
          color[1] !== "#ffffff" &&
          color[1] !== "#000" &&
          color[1] !== "#000000"
      )
      .map(color => (
        <Color key={color[0]} colorName={color[0]} colorVal={color[1]} />
      ))}
    {Object.entries(props.colors)
      .filter(
        color =>
          typeof color[1] === "string" &&
          color[0].indexOf("primary") !== 0 &&
          color[0].indexOf("secondary") !== 0 &&
          color[0].indexOf("text") !== 0 &&
          color[0].indexOf("background") !== 0 &&
          color[0] !== "white" &&
          color[1] !== "transparent" &&
          color[1] !== "#fff" &&
          color[1] !== "#ffffff" &&
          color[1] !== "#000" &&
          color[1] !== "#000000"
      )
      .map(color => (
        <Color key={color[0]} colorName={color[0]} colorVal={color[1]} />
      ))}
    {Object.entries(props.colors)
      .filter(color => typeof color[1] === "object")
      .map(color => {
        const colorName = color[0]
        return (
          <>
            <h3 sx={{ opacity: 0.9, fontSize: 3, pb: 3, m: 0 }}>{colorName}</h3>
            <div sx={{ display: "flex", flexWrap: "wrap", pb: 4 }}>
              {color[1]
                .filter(color => color)
                .map((color, i) => (
                  <div key={color + 1} sx={{ mr: 4, mb: 4 }}>
                    <div sx={{ opacity: 0.9, fontSize: 0 }}>{color}</div>
                    <div sx={{ width: "180px", height: "180px", bg: color }} />
                  </div>
                ))}
            </div>
          </>
        )
      })}
  </div>
)
