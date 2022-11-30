import { Flex, Box, Heading, Text, Image, Link, Button  } from '@chakra-ui/react'
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
        overflow="hidden"
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
              lg: "50%",
            }}
          >
          <Box h="100%" w="100%" position="relative">
              {/* <Image boxSize='full' src={urlToImage} alt={title} objectFit="cover" /> */}
              { urlToImage ? (
                <Image boxSize="full" src={urlToImage} alt={title} objectFit="cover" />
              ) : (
                <Image boxSize="full" src="https://via.placeholder.com/400x300" alt={title} objectFit="cover" />
              )}

          </Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            mx="auto"
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
              <Link href={url} isExternal style={{ textDecoration: 'none' }}>
              {title}
              </Link>
            </Heading>



            <Text
              mt={4}
              color="gray.600"
              fontSize="md"
              noOfLines={2}
            >
              {description}
            </Text>

            <Box 
              mt={4}
            >
              <Text fontSize="md" color="gray.600" as='b'>
                Publicado el: {date} a las {time} hs
              </Text>
            </Box>
            <Link 
            href={url} isExternal
            style={{ textDecoration: 'none' }}
            >
                <Button
                  mt={4}
                  size="sm"
                  rounded="full"
                  px={6}
                  bg="brand.button"
                  color="brand.buttonText"
                  _hover={{
                    bg: "brand.buttonHover",
                  }}
                >
                  Leer más
                </Button>
              </Link>
          </Box>
        </Box>
      </Flex>
      
    </>
  );
};
