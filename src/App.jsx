import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Nofound } from "./pages/Nofound"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Nofound/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
