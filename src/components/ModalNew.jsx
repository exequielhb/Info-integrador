import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
    Button,
    Text,
    Image,
    Link,
    Box,
    Center
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { useDisclosure } from "@chakra-ui/react";

import { useState, useEffect } from "react";

export const ModalNew = ({title, description, url, urlToImage, author}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

    //size modal
    const [size, setSize] = useState("xl");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSize("xs");
            } else if (window.innerWidth < 900) {
                setSize("sm");
            } else if (window.innerWidth < 1200) {
                setSize("lg");
            } else if (window.innerWidth < 1500) {
                setSize("xl");
            } else {
                setSize("full");
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })






  return (
    <>
      <Button onClick={onOpen}>Ver noticia</Button>

        <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader
                color="black"
                fontSize='4xl'
                textAlign="center"
            >{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Center>
                    <Image src={urlToImage} alt={title} borderRadius="2xl" />
                </Center>
                <Center>
                <Box
                    mt={4}
                    color="gray.600"
                    w="80%"
                >
                    <Text mt={4} color="gray.600" fontSize='2xl'>
                        {description}
                    </Text>
                </Box>
                </Center>
                <Box mt={4}>
                    <Text fontSize="md" color="gray.600" as='b'>
                        Publicado por: {author}
                    </Text>
                </Box>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>

      
    </>
  );
};
