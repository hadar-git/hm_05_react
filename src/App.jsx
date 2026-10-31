import { useState } from 'react'
import './App.css'
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from './RecipesCarousel/RecipesCarousel'

function App() {
  const [showRecipes, setShowRecipes] = useState(true)


const images = [
  "/Screenshot 2026-10-29 234013.png",
  "/Screenshot 2026-10-29 234356.png",
  "/Screenshot 2026-10-29 234807.png",
  "/Screenshot 2026-10-29 235035.png",
];




  return (
    <>
      <Carousel images={images} intervalSeconds={3} />
      <button onClick={()=> setShowRecipes(!showRecipes)}>הצג/הסתר</button>
     {showRecipes && <RecipesCarousel/> } 
    </>
  )
}

export default App
