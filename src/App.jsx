
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { NewsComponent } from "./components/NewsComponent"
import { GlobalStyle } from "./styles/styles"


function App() {

  return (
    <>
      <Navbar />
      <NewsComponent />
      {/* footer */}
      <Footer />


      <GlobalStyle />
    </>
  )
}

export default App
