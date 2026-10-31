import { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import "./Carousel.css";

export default function Carousel({ images, intervalSeconds = 3 }) {


  const [selected, setSelected] = useState(0)

  const move =(val)=>{
      setSelected((prev)=>(prev+val+images.length)%images.length)
  
  }
  useEffect(() => {
   const timer =  setInterval(() => {
    move(1)
   }, intervalSeconds*1000);

    return () => {
      clearInterval(timer )
    }
  }, [intervalSeconds, selected])
  
  return (
    <div className="carousel">
       <button className='carousel-arrow next' onClick={() =>move(1)} > › </button>
      <button className='carousel-arrow prev' onClick={() =>move(-1)}> ‹ </button>
     

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

