import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import  NewProject from "./components/NewProject"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/newProject" element={<NewProject />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </BrowserRouter>``
    </>
  )
}

export default App
