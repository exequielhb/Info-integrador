import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const colors = {
  brand: {
    nav: '#eebbc3',
    button: "#eebbc3",
    buttonHover: "#FF8787",
    headText: "#fffffe",
    buttonText: "#232946",
    paragraph: "#b8c1ec",
    secondary: "#fffffe",
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)
