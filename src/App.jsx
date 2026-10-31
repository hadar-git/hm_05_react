import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from './RecipesCarousel/RecipesCarousel'

function App() {
  const [count, setCount] = useState(0)


const images = [
  "/Screenshot 2026-10-29 234013.png",
  "/Screenshot 2026-10-29 234356.png",
  "/Screenshot 2026-10-29 234807.png",
  "/Screenshot 2026-10-29 235035.png",
];




  return (
    <>
      <Carousel images={images} intervalSeconds={3} />
      <RecipesCarousel/>
    </>
  )
}

export default App
