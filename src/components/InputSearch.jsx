import {
  Button,
  Box,
  Flex,
  Input,
  Stack,
  FormControl,
  FormErrorMessage,
  Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const InputSearch = ({
  handleChange,
  handleSubmit,
  error,
  isDisabled,
}) => {

  return (
    


    <FormControl isRequired isInvalid={error}>
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <Stack mt={10} spacing={4}>
            <Input
              type="text"
              placeholder="Buscar noticia..."
              // medium size
              onChange={handleChange}
              size="lg"
              fontSize="3xl"
              background="white"
              width={550}
              id="search"
              height={79}
              mt={10}
            />

            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                leftIcon={<SearchIcon />}
                color="brand.buttonText"
                _hover={{
                  bg: "brand.buttonHover",
                }}
                bg={"brand.button"}
                size="lg"
                onClick={handleSubmit}
                isDisabled={isDisabled}
                textAlign="center"
                width={200}
                fontSize="2xl"
                height={59}
                mt={4}
                mb={6}
              >
                <Text color="brand.buttonText">Buscar</Text>
              </Button>

              <FormErrorMessage>{error}</FormErrorMessage>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </FormControl>
  );
};
