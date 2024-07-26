
import { Box } from '@chakra-ui/react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from "./pages/About"

function App() {
  return (
  <Box background={"#191919"}  px={["0px","0px","0px","50px"]}>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  </Box>
  )
}

export default App
