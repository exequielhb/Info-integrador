import { Input, Stack } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
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
      <Box maxW="sm">
        <Stack spacing={3}>
          <Input
            type="text"
            placeholder="Buscar noticia..."
            size="lg"
            onChange={handleChange}
            background="white"

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
              width="40%"
            >
              Buscar
            </Button>

            <FormErrorMessage>{error}</FormErrorMessage>
          </Box>
        </Stack>
      </Box>
    </FormControl>
  );
};
