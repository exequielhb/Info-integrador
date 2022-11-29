
import { Flex, Icon  } from '@chakra-ui/react';
import {FaNewspaper} from "react-icons/fa"


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
        <Flex bg="tomato" alignItems="center" justifyContent="space-between" mx="auto" p={6} py={9} h={58}>
          <Flex>
            <h1 fontSize="xl" fontWeight="medium" ml="4">
              <Icon as={FaNewspaper} w={8} h={8} color='pink.600' />
            </h1>
          </Flex>
        </Flex>
      </header>
    </>
  );
};
