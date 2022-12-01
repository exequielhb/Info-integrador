
import { Route, Routes } from "react-router-dom"
import { NotFound } from "./animation/NotFound"
import { NewsComponent } from "./components/NewsComponent"
import { NewsDetail } from "./components/NewsDetail"
import { GlobalStyle } from "./styles/styles"



function App() {

  return (
    <>
    <Routes>
      <Route path="about" element={<NewsDetail />} />
      <Route path="/" element={<NewsComponent />} />
      {/* error */}
      <Route path="*" element={<NotFound />} />

      <Route path="/news/:id" element={<NewsDetail />} />

    </Routes>
      

      <GlobalStyle />
    </>
  )
}

export default App
