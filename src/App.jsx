
import { CardNews } from "./components/CardNews"
import { InputSearch } from "./components/InputSearch"
import { Loader } from "./components/Loader"
import { Navbar } from "./components/Navbar"
import { Pagination } from "./components/Pagination"


function App() {

  return (
    <>
    <Navbar />
    <InputSearch />
    <Loader />
    <CardNews />
    <Pagination />
    </>
  )
}

export default App
