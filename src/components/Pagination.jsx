import { Flex, Button } from "@chakra-ui/react";

export const Pagination = ({page, setPage, totalPages}) => {

    const PagButton = (props) => {
        return (
            <Button
                onClick={() => setPage(props.page)}
                colorScheme={props.page === page ? "blue" : "gray"}
                size="sm"
                mx="1"
                disabled={props.page === page}
            >
                {props.page}
            </Button>
  );
        }

    return (
        <Flex justifyContent="center" my="4">
            {page > 1 && (
                <Button
                    onClick={() => setPage(page - 1)}
                    colorScheme="blue"
                    size="sm"
                    mx="1"
                >
                    Anterior
                </Button>
            )}
            {page > 2 && <PagButton page={page - 2} />}
            {page > 1 && <PagButton page={page - 1} />}
            <PagButton page={page} />
            {page < totalPages && <PagButton page={page + 1} />}
            {page < totalPages - 1 && <PagButton page={page + 2} />}
            {page < totalPages && (
                <Button
                    onClick={() => setPage(page + 1)}
                    colorScheme="blue"
                    size="sm"
                    mx="1"
                >
                    Siguiente
                </Button>
            ) }
        </Flex>
    );
};


