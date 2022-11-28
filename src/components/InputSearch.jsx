import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

export const InputSearch = () => {
  return (
    <InputGroup >
      <Input
        size='lg'
        placeholder='Enter password'
        
      />
      {/* <InputRightElement children={<Button>Holaa</Button> } /> */}
     
      {/* <InputRightElement width='6rem'>
        <Button h='2rem' size='sm'>
            botoncito
        </Button>
      </InputRightElement> */}
    </InputGroup>
  )
}
