import { InputSearch } from "./InputSearch";
import { Loader } from "./Loader";
import { CardNews } from "./CardNews";
import { Pagination } from "./Pagination";
import { Box, Text, Flex } from "@chakra-ui/react";

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import { Footer } from "./Footer";

import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

import { v4 as uuidv4 } from "uuid";

export const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const API = "fa6e00d5edeb46cbb6c7f432f50ee6e6"

  const handleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length < 3) {
      setError("El texto debe tener al menos 3 caracteres");
      setIsDisabled(true);
      return;
    } else {
      setError("");
      setIsDisabled(false);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    getNews();
  };

  const getNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API}&page=${page}&pageSize=10&language=es`;
    const resp = await fetch(url);

    const data = await resp.json();

    // console.log(data.articles)

    setNews(data.articles);

    setTotalPages(Math.ceil(data.totalResults / 10));

    setLoading(false);
  };

  // ---------------------------

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    getNews();
  }, [page]);

  return (
    <>
      <Navbar />

      <Flex direction="column" align="center" w="100%" h="100vh">
        <InputSearch
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
          isDisabled={isDisabled}
        />

        {/* ir arriba */}
        {isVisible && (
          <Button
            onClick={scrollToTop}
            position="fixed"
            bottom="3rem"
            right="2rem"
            size="md"
            colorScheme="teal"
            aria-label="Ir arriba"
            rounded={100}
            zIndex={100}
          >
            <ArrowUpIcon />
          </Button>
        )}

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

        {news?.length > 0 ? (
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

            {news.map((item) => {
              return (
                <CardNews
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  myKey={uuidv4()}
                  url={item.url}
                  author={item.author}
                  content={item.content}
                />
              );
            })}

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
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
        )}

        <Footer />
      </Flex>
    </>
  );
};
