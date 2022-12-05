import { Flex, Icon, extendTheme, theme } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex
          bg="brand.nav"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          p={6}
          py={9}
          h={58}
        >
          <Flex>
            <h1 fontSize="xl" fontWeight="medium" ml="4">
              <Icon as={FaNewspaper} w={8} h={8} color="brand.secondary" />
            </h1>
          </Flex>
          <Link
            to="/about"
            color="brand.secondary"
            fontSize="xl"
            fontWeight="medium"
            ml="4"
          >
            {" "}
            About{" "}
          </Link>
        </Flex>
      </header>
    </>
  );
};
