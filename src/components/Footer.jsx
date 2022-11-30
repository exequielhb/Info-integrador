import {Box, Flex, Heading, Image, Text, Link} from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Flex
      bg="brand.nav"
      color="brand.secondary"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      w="100%"
      bottom={0}
      position="absolute"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          News App
        </Heading>
      </Flex>

      <Box>
        <Text>© 2021 News App</Text>
      </Box>
    </Flex>
  )
};
