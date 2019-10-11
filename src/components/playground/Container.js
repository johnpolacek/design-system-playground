/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useContext } from "react"
import { NavContext } from "../../context/NavContext"

export default React.forwardRef((props, ref) => {
  const { playgroundHeight } = useContext(NavContext)

  return (
    <div
      sx={{
        position: "absolute",
        top: "48px",
        left: 0,
        display: "block",
        height: playgroundHeight,
        transition: "height 0.3s ease-in-out",
        width: "100%",
        pt: 6,
      }}
      ref={ref}
    >
      {props.children}
    </div>
  )
})
