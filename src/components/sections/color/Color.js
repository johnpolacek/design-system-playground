/** @jsx jsx */
import { jsx } from "theme-ui"
import { lighten, darken, shade, tint } from "@theme-ui/color"
import Flex from "../../ui/Flex"

export default props => (
  <div sx={{ py: 3, pr: [0, 5] }} key={props.colorName}>
    {props.colorName && (
      <h3 sx={{ opacity: 0.9, fontSize: 3, pb: 2, m: 0 }}>{props.colorName}</h3>
    )}
    <div sx={{ opacity: 0.9, fontSize: 0, pb: 3 }}>{props.colorVal}</div>
    <Flex sx={{ justifyContent: ["left", "center"] }}>
      <div
        sx={{ width: "136px", height: "136px", bg: props.colorVal, mr: 4 }}
      />
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <h4 sx={{ fontWeight: 400, fontSize: 0, mb: 1 }}>Lighten / Darken</h4>
        <Flex sx={{ justifyContent: ["left", "center"] }}>
          {[...Array(6).keys()]
            .splice(1)
            .reverse()
            .map(i => (
              <div
                key={"lighten" + i}
                sx={{
                  width: ["32px", "36px"],
                  height: ["32px", "36px"],
                  bg: lighten(props.colorVal, i / 20),
                }}
              />
            ))}
          {[...Array(6).keys()].splice(1).map(i => (
            <div
              key={"darken" + i}
              sx={{
                width: ["32px", "36px"],
                height: ["32px", "36px"],
                bg: darken(props.colorVal, i / 20),
              }}
            />
          ))}
        </Flex>
        <h4 sx={{ fontWeight: 400, fontSize: 0, pt: 3, mb: 1 }}>
          Tint / Shade
        </h4>
        <Flex sx={{ justifyContent: ["left", "center"] }}>
          {[...Array(6).keys()]
            .reverse()
            .splice(1)
            .map(i => (
              <div
                key={"tint" + i}
                sx={{
                  width: ["32px", "36px"],
                  height: ["32px", "36px"],
                  bg: tint(props.colorVal, i / 5),
                }}
              />
            ))}
          {[...Array(6).keys()].splice(1).map(i => (
            <div
              key={"shade" + i}
              sx={{
                width: ["32px", "36px"],
                height: ["32px", "36px"],
                bg: shade(props.colorVal, i / 5),
              }}
            />
          ))}
        </Flex>
      </div>
    </Flex>
  </div>
)
