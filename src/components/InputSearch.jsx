import { Input, Stack } from "@chakra-ui/react";
import { Button, Box, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import {
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";


export const InputSearch = ({handleChange, handleSubmit, error, isDisabled}) => {

  return (
    <FormControl 
    isRequired
    isInvalid={error}
    >
    <Flex justifyContent="center" alignItems="center">
      <Box>
        <Stack mt={10} spacing={4}>
          <Input
            type="text"
            placeholder="Buscar noticia..."
            // medium size
            onChange={handleChange}
            size="lg"
            fontSize='2xl'
            background="white"
            width={500}
            height={58}
          />

          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Button
              leftIcon={<SearchIcon />}
              colorScheme="gray"
              size="lg"
              onClick={handleSubmit}
              isDisabled={isDisabled}
              textAlign="center"
              mt={4}
              mb={6}
            >
              Buscar
            </Button>

            <FormErrorMessage>{error}</FormErrorMessage>
          </Box>
        </Stack>
      </Box>
    </Flex>
    </FormControl>
  );
};
