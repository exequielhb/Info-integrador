import { InputSearch } from "./InputSearch"
import { Loader } from "./Loader"
import { CardNews } from "./CardNews"
import { Pagination } from "./Pagination"
import { Box, Divider, Text, Flex } from "@chakra-ui/react"

import {Footer} from "./Footer"

import { useState, useEffect } from "react"


export const NewsComponent = () => {

    // api 693ce8a687394147a60502889ff25eec
    // fa6c9be845444f71adede2e299d69a13
    // 334397c99f564978987b9ba7fe5865b4
    // 24adf08993c9408abbeb0173c3c3859f

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState("")
    const [error, setError] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = e => {

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
        // clear input
        setSearch(" ")
    }

    const getNews = async () => {
        setLoading(true)
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=24adf08993c9408abbeb0173c3c3859f&page=${page}&pageSize=10&language=es`
        const resp = await fetch(url)
        const data = await resp.json()

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
    height="100vh"
    >

     <InputSearch 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        isDisabled={isDisabled}
     />

     {/* agregamos loader al buscar una noticia */}
        {loading && <Loader />}

    {/* si no encuentra la noticia agregamos un mensjae */}
        {news?.length === 0 && !loading && (
            <Text
            textAlign="center"
            color="white"
            fontSize="2xl"
            fontWeight="bold"
            >
                No se encontraron noticias
            </Text>
        )}

     {news?.length > 0 ?  (
        <Box>

            <Text
        color="white"
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        mt="4"
        >
            Está viendo: {news?.length} noticias de {totalPages} resultados
        </Text>

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

        <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
        />
        </Box>

     ) : (
        <Text
        textAlign="center"
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        mt="10"
        >
            Empeza buscando una noticia
        </Text>
     ) } 
     

    {/* <Divider /> */}
    {/* <Footer /> */}

    </Box>
    </>
  )
}
