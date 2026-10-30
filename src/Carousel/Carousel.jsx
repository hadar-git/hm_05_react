import { useState } from 'react'
import CarouselItem from './CarouselItem'
import "./Carousel.css";

export default function Carousel({ images, intervalSeconds = 3 }) {

  const [selected, setSelected] = useState(0)
  return (
    <div className="carousel">

        {images.map( (image, index)=>   index === selected &&   <CarouselItem key={index} src={image} alt={`${index + 1}`} />)}
        <div className='carousel-dots'>
            {images.map((image, index)=>  (
              <button
                key={index}
                className={index === selected ? 'carousel-dot active' : 'carousel-dot'}
                onClick={() => setSelected(index)}
              ></button>
            ))}
        </div>
        
    </div>
  )
}

