import { Route, Routes } from "react-router-dom";
import { NotFound } from "./animation/NotFound";
import { NewsComponent } from "./components/NewsComponent";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsComponent />} />
        {/* error */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </>
  );
}

export default App;
