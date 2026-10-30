import { useState } from 'react'
import CarouselItem from './CarouselItem'
import "./Carousel.css";

export default function Carousel({ images, intervalSeconds = 3 }) {
  const [index, setIndex] = useState(0)

  return (
    <div className="carousel">
        {images.map( (image, index)=>
                  <CarouselItem key={index} src={images[index]} alt={`${index + 1}`} />

        )}
    </div>
  )
}

