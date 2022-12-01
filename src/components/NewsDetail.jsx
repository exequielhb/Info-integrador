import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Text, Flex, Image, Heading, Button, Link } from "@chakra-ui/react"


export const NewsDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  
  const getNews = async (id) => {
    setLoading(true)
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=693ce8a687394147a60502889ff25eec`)
      const data = await response.json()
      setNews(data.articles[0])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getNews( )
  }, [])



  

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        bgImage="url('https://images.unsplash.com/photo-1517436073-8b3b0f1b0f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3cyUyMGFwcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.5)"
          justify="center"
          align="center"
        >
          <Box
            w="80%"
            h="80%"

            bg="white"
            borderRadius="10px"
            p="10px"
            overflow="auto"
          >
            <Flex
              w="100%"
              justify="space-between"
              align="center"
              mb="10px"
            >
              <Heading
                as="h1"
                size="lg"
                color="black"
              >
                {news.title}
              </Heading>
              <Button
                colorScheme="blue"
                onClick={() => navigate(-1)}
              >
                Volver
              </Button>
            </Flex>
            <Flex
              w="100%"
              justify="space-between"
              align="center"
              mb="10px"
            >
              <Text
                as="p"
                color="black"
              >
                {news.author}
              </Text>
              <Text 
                as="p"
                color="black"
              >
                {news.publishedAt}
              </Text>
            </Flex>
            <Image src={news.urlToImage} />
            <Text
              as="p"
              color="black"
              mt="10px"
            >
              {news.content}
            </Text>
            <Link href={news.url} isExternal>
              Leer más
            </Link>
          </Box>
        </Flex>
      </Box>

     
    </>
  )
}
