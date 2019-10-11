/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Box, Button, ButtonGroup, Stack, Heading, Text } from "@chakra-ui/core"
import { MdBuild, MdCall } from "react-icons/md"

const Feature = ({ title, desc, rest }) => (
  <Box bg="white" p={4} mb={4} shadow="card" borderWidth="1px" {...rest}>
    <Heading color="primary" fontSize={2}>
      {title}
    </Heading>
    <Text color="black" mt={4} fontSize={0}>
      {desc}
    </Text>
  </Box>
)

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div sx={{ mt: -3, mb: 4 }}>
        <a sx={{ fontSize: 1, color: "primary" }} href="https://chakra-ui.com/">
          chakra-ui.com
        </a>
      </div>

      <div sx={{ display: ["block", "block", "flex"] }}>
        <div sx={{ width: ["100%", "100%", "480px"], mr: [0, 4] }}>
          <Stack spacing={8}>
            <Feature
              title="Plan Money"
              desc="The future can be even brighter but a goal without a plan is just a wish"
            />
            <Feature
              title="Save Money"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
            />
          </Stack>
        </div>
        <div sx={{ width: ["100%", "100%", "480px"] }}>
          <ButtonGroup width="100%" pb={4}>
            <Button
              bg="primary"
              px={2}
              py={1}
              mb={2}
              fontSize={0}
              height="auto"
            >
              Button
            </Button>
            <Button
              bg="primary"
              px={3}
              py={2}
              mb={2}
              fontSize={1}
              height="auto"
            >
              Button
            </Button>
            <Button
              bg="primary"
              px={4}
              py={3}
              mb={2}
              fontSize={2}
              height="auto"
            >
              Button
            </Button>
            <Button
              bg="primary"
              px={5}
              py={3}
              mb={2}
              fontSize={4}
              height="auto"
            >
              Primary
            </Button>
          </ButtonGroup>
          <ButtonGroup width="100%" pb={4}>
            <Button bg="primary" py={2} mb={2} fontSize={1} height="auto">
              Button
            </Button>
            <Button
              bg={theme.colors.secondary || theme.colors.green}
              py={2}
              mb={2}
              fontSize={1}
              height="auto"
            >
              Secondary
            </Button>
            <Button
              bg="transparent"
              boxShadow="0px 0px 0px 2px inset"
              color="primary"
              py={2}
              fontSize={1}
              height="auto"
            >
              Outline
            </Button>
          </ButtonGroup>
          <ButtonGroup width="100%" pb={4}>
            <Button
              leftIcon={MdBuild}
              bg="pink"
              py={2}
              mb={2}
              fontSize={1}
              height="auto"
            >
              Settings
            </Button>
            <Button
              rightIcon={MdCall}
              bg="transparent"
              boxShadow="0px 0px 0px 2px inset"
              color="blue"
              py={2}
              mb={2}
              fontSize={1}
              height="auto"
            >
              Call us
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  )
}
