import { Flex, Box, Link, Heading, Text } from '@chakra-ui/react'

export const CardNews = () => {
  return (
    <>
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "40%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <Heading
              size="md"
            >
              Build Your New{" "}
              <span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
                query="Idea"
              >
                Idea
              </span>
            </Heading>
            <Text
              mt={4}
              color="gray.600"
              fontSize='lg'
              noOfLines={2}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </Text>

            <Box mt={8}>
              <Text fontSize="md" color="gray.600" as='b'>
                Publicado el: <span>20/20/20</span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
