import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import AboutUs from './pages/AboutUs/aboutUs.tsx'
import MainMenu from './pages/MainMenu/mainMenu.tsx'
import GianCodeLab from './pages/GianCodeLab/gianCodeLab.tsx'
import MarieArtStudio from './pages/MarieArtStudio/marieArtStudio.tsx'
import Collabville from './pages/Collabville/collabville.tsx'

function App() {
  const location = useLocation()
  
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainMenu />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gian-code-lab" element={<GianCodeLab />} />  
            <Route path="/marie-art-studio" element={<MarieArtStudio />} />
            <Route path="/collabville" element={<Collabville />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
