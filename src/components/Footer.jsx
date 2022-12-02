import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      bg="brand.nav"
      color="brand.secondary"
      padding="0.3rem"
      w="100%"
      bottom={0}
      position="fixed"
      justifyContent="center"
    >
      <Box>
        <Text color="brand.buttonText">© 2022 App Noticias</Text>
      </Box>
    </Flex>
  );
};
