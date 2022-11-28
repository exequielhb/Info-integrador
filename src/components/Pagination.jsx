import { Flex, Button } from "@chakra-ui/react";

export const Pagination = () => {
    const PagButton = (props) => {
        return (
          <Button
            mx={1}
            px={4}
            py={2}
            rounded="md"
            color="black"
            
          >
            {props.children}
          </Button>
        );
      };

  return (
    
      <Flex>
        <PagButton>previous</PagButton>
        <PagButton >1</PagButton>
        <PagButton>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>Next</PagButton>
      </Flex>
   
  );
};
