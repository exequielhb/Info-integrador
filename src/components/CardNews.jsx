import { Flex, Box, Heading, Text, Image, Button  } from '@chakra-ui/react'
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { ModalNew } from './ModalNew';

export const CardNews = ({title, description, urlToImage, publishedAt, myKey, url, author}) => {

  const date = DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_MED);
  const time = DateTime.fromISO(publishedAt).toLocaleString(DateTime.TIME_SIMPLE);


  return (
    <>

  <Flex
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        key={myKey}
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
              <Link to={`/news/${myKey}`} target="_blank" >
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
              <ModalNew
                title={title}
                description={description}
                urlToImage={urlToImage}
                url={url}
                author={author}

              />
          </Box>
        </Box>
      </Flex>
      
    </>
  );
};
