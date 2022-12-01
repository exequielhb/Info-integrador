import Lottie from "lottie-web"
import animacion from "../animation/animacion.json"
import { useEffect } from "react"

import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const NotFound = () => {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector("#animacion-uno"),
            animationData: animacion,
            loop: true,
            autoplay: true

        })
        return () => Lottie.destroy()
    }, [])

  return (
    <>
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            margin="auto"
        >
    <div id='animacion-uno' style={{ marginTop: "0%", marginBottom: "0%" }}  />
    <Button
        bg={"brand.button"}
        size="lg"
        margin="auto"
        marginBottom={10}
        color="brand.buttonText"
        _hover={{ bg: "brand.buttonHover" }}

    >
        <Link to="/">Volver al inicio</Link>
        </Button>
    </Flex>
    </>
  )
}