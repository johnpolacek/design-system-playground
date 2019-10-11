/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Button from "./Button"

export default props => (
  <>
    <div
      sx={{
        p: 3,
        boxShadow: "card",
        width: "270px",
        mr: 4,
        mb: 4,
      }}
    >
      {props.image && (
        <img
          sx={{ width: "100%", pb: 3 }}
          src="https://placeimg.com/420/420/any"
          alt={props.imageAltText || "placeholder image"}
        />
      )}
      {props.children}
      {props.buttonText && (
        <div sx={{ textAlign: "right", mt: 2, p: 3 }}>
          <Button
            sx={{
              fontSize: 1,
              py: 2,
              px: 3,
              bg: props.buttonColor || "primary",
            }}
          >
            {props.buttonText}
          </Button>
        </div>
      )}
    </div>
  </>
)
