/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Flex, Box, Button, Card, Text, Image } from "rebass"
import { Label, Input, Select, Radio, Checkbox } from "@rebass/forms"

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div sx={{ mt: -3, mb: 4 }}>
        <a sx={{ fontSize: 1, color: "primary" }} href="https://rebassjs.org/">
          rebassjs.org
        </a>
      </div>
      <Flex pb={4}>
        <Card width={256} mr={4} bg="white">
          <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
          <Text color="black" p={3}>
            This is a Card
          </Text>
        </Card>
        <Flex flexDirection="column">
          <Box pb={4}>
            <Button sx={{ bg: "primary", color: "#fff", mr: 2, mb: 2 }}>
              Primary
            </Button>
            <Button
              sx={{
                bg: theme.colors.secondary || theme.colors.green,
                color: "#fff",
                mr: 2,
                mb: 2,
              }}
            >
              Secondary
            </Button>
            <Button
              sx={{
                bg: "transparent",
                boxShadow: "0px 0px 0px 2px inset",
                color: "primary",
                mr: 2,
              }}
            >
              Outline
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                display: "inline-block",
                color: "#fff",
                bg: "primary",
                px: 2,
                py: 1,
                borderRadius: 9999,
              }}
            >
              Badge
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box
        as="form"
        onSubmit={e => e.preventDefault()}
        width={[1, 720]}
        pb={4}
        pr={2}
      >
        <Flex mx={-2} mb={3}>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue="Jane Doe" />
          </Box>
          <Box width={1 / 2} px={2}>
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue="NYC">
              <option>NYC</option>
              <option>DC</option>
              <option>ATX</option>
              <option>SF</option>
              <option>LA</option>
            </Select>
          </Box>
        </Flex>
        <Flex mx={-2} flexWrap="wrap">
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="beep" name="beep" value="beep" defaultChecked />
            Beep
          </Label>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Radio id="boop" name="beep" value="boop" />
            Boop
          </Label>
          <Label width={[1 / 2, 1 / 4]} p={2}>
            <Checkbox id="remember" name="remember" />
            Remember Me
          </Label>
          <Box px={2} ml="auto">
            <Button>Beep</Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
