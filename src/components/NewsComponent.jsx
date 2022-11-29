import { InputSearch } from "./InputSearch"
import { Loader } from "./Loader"
import { CardNews } from "./CardNews"
import { Pagination } from "./Pagination"
import { Box, Divider, Text } from "@chakra-ui/react"

import { useState, useEffect } from "react"
import { Footer } from "./Footer"


export const NewsComponent = () => {

    // api 693ce8a687394147a60502889ff25eec
    // fa6c9be845444f71adede2e299d69a13
    // 334397c99f564978987b9ba7fe5865b4

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState("")
    const [error, setError] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = (e) => {

        setSearch(e.target.value)

        if (e.target.value.length < 3) {
            setError("El texto debe tener al menos 3 caracteres")
            setIsDisabled(true)
            return
        } else {
            setError("")
            setIsDisabled(false)
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPage(1)
        getNews()
    }

    const getNews = async () => {
        setLoading(true)
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=334397c99f564978987b9ba7fe5865b4&page=${page}&pageSize=10&language=es`
        const resp = await fetch(url)
        const data = await resp.json()
        // console.log(data.articles);
        // console.log(data.totalResults);

        setNews(data.articles)
        setTotalPages(Math.ceil(data.totalResults / 10))
        setLoading(false)
    }



    useEffect(() => {
        getNews()
    }, [page])



  return (
    <>

    <Box
    bg="blue.800"
    >

     <InputSearch 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        isDisabled={isDisabled}


     />

     {/* total news */}
        <Text
        color="white"
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        mt="4"
        >
            Total de noticias: {totalPages * 10}
        </Text>

     {news?.length > 0 ? (
        <Box>
            {news.map((item, index) => {
                return (
                        <CardNews 
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            urlToImage={item.urlToImage}
                            publishedAt={item.publishedAt}
                            key={index}
                        />
                )
            })}
        </Box>

     ) : (
            <Box>
                <Text color="white" textAlign="center" fontSize="2xl" fontWeight="bold" mt="10">No hay resultados</Text>
            </Box>
     )}
     

     {/* pagination */}
        <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
        />

        <Divider />

    <Footer />
    </Box>
    </>
  )
}
