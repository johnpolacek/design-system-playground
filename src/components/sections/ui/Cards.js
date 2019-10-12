/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Card from "../../ui/Card"
import Flex from "../../ui/Flex"

export default props => {
  const { theme } = useContext(ThemeContext)

  const cardColors = Object.keys(theme.colors).filter(
    color =>
      color !== "white" &&
      color !== "text" &&
      color !== "black" &&
      color !== "background"
  )

  return (
    <>
      <Flex sx={{ pb: 3 }}>
        {cardColors.map(color => (
          <div sx={{ width: "50%" }}>
            <Card
              key={color + "Card"}
              buttonText="add to cart"
              image="https://placeimg.com/640/480/any"
              imageAltText="Card Placeholder Image"
              buttonColor={color}
            >
              This is a card.
            </Card>
          </div>
        ))}
      </Flex>
    </>
  )
}
