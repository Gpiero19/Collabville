import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs/aboutUs.tsx'
import MainMenu from './pages/MainMenu/mainMenu.tsx'
import GianCodeLab from './pages/GianCodeLab/gianCodeLab.tsx'
import MarieArtStudio from './pages/MarieArtStudio/marieArtStudio.tsx'
import Collabville from './pages/Collabville/collabville.tsx'

function App() {
  
  return (
    <>
      <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/GianCodeLab" element={<GianCodeLab />} />  
          <Route path="/MarieArtStudio" element={<MarieArtStudio />} />
          <Route path="/Collabville" element={<Collabville />} />
      </Routes>
    </>
  )
}

export default App
