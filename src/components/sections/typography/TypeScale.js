/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Heading from "../../ui/Heading"

export default props => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div sx={{ display: "flex", flexWrap: "wrap", py: 3 }}>
        {props.fontSizes.map(size => (
          <div
            key={"fontSize" + size}
            sx={{
              width: ["50%", "33.3333%", "25%", "20%", "16.6666%"],
              minHeight: "140px",
              pb: 2,
              pr: 2,
            }}
          >
            <div
              sx={{ height: "100%", border: "solid 1px", borderColor: "gray" }}
            >
              <div
                sx={{
                  borderBottom: "solid 1px",
                  borderColor: "gray",
                  py: 2,
                  px: 3,
                }}
              >
                <div sx={{ textAlign: "center", color: "gray" }}>{size}</div>
              </div>
              <div
                sx={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  textAlign: "center",
                  height: "75%",
                  py: 1,
                  px: 3,
                  fontSize: size,
                }}
              >
                <div sx={{ width: "100%" }}>Aa</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div sx={{ pb: 4 }}>
        <Heading sx={{ fontSize: theme.fontSizes.length - 1 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 1</span>
          <span sx={{ display: ["inline", "none"] }}>H1</span>
        </Heading>
        <Heading sx={{ fontSize: theme.fontSizes.length - 2 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 2</span>
          <span sx={{ display: ["inline", "none"] }}>H2</span>
        </Heading>
        <Heading sx={{ fontSize: theme.fontSizes.length - 3 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 3</span>
          <span sx={{ display: ["inline", "none"] }}>H3</span>
        </Heading>
        <Heading sx={{ fontSize: theme.fontSizes.length - 4 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 4</span>
          <span sx={{ display: ["inline", "none"] }}>H4</span>
        </Heading>
        <Heading sx={{ fontSize: theme.fontSizes.length - 5 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 5</span>
          <span sx={{ display: ["inline", "none"] }}>H5</span>
        </Heading>
        <Heading sx={{ fontSize: theme.fontSizes.length - 6 }}>
          <span sx={{ display: ["none", "inline"] }}>Heading 6</span>
          <span sx={{ display: ["inline", "none"] }}>H6</span>
        </Heading>
        <p id="bodyText" sx={{ fontSize: [0, 1] }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
          accumsan lacus vel facilisis. Massa tincidunt dui ut ornare. Amet nisl
          purus in mollis nunc sed id. Auctor augue mauris augue neque gravida
          in fermentum. Ut morbi tincidunt augue interdum velit euismod in
          pellentesque massa. Mattis molestie a iaculis at erat pellentesque
          adipiscing commodo.{" "}
        </p>
      </div>
    </>
  )
}
