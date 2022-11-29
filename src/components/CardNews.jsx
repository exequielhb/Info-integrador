import { Flex, Box, Link, Heading, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon';

export const CardNews = ({title, description, url, urlToImage, publishedAt, key}) => {

  const date = DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_MED);
  const time = DateTime.fromISO(publishedAt).toLocaleString(DateTime.TIME_SIMPLE);

 
  

  return (
    <>

      <Flex
        p={50}
        key={key}
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
                  `url(${urlToImage})`,
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
              as="h4"
              size="lg"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              mb={3}
            >
              {title}
            </Heading>


            <Text
              mt={4}
              color="gray.600"
              fontSize="md"
              noOfLines={2}
            >
              {description}
            </Text>

            <Box mt={8}>
              <Text fontSize="md" color="gray.600" as='b'>
                Publicado el: {date} a las {time} hs
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
