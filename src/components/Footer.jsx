import { Box } from '@chakra-ui/react'

export const Footer = () => {
  return (
    // footer
    <Box
      as="footer"
      w="100%"
      h="100px"
      bg="gray.700"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="xl"
    >
      <p>© 2021 - Todos los derechos reservados</p>
    </Box>
  );
};
