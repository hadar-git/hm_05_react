import {useState, useEffect} from 'react'
import Carousel from '../Carousel/Carousel'

export default function RecipesCarousel() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
      const loadImages =async ()  =>{
        try{
       const response=  await fetch('https://dummyjson.com/recipes?limit=6&select=name,image',  { signal: controller.signal })
         if(!response.ok) throw new Error("no response...");
         const data= await response.json();
                const urls = data.recipes.map((recipe) => recipe.image);
  setImages(urls);
        setLoading(false);
                
        }
        catch(err)
        {
             if (err.name === "AbortError") return; 
            setError(err.message)
            setLoading(false);
    
        }
        
      }
    loadImages()
         
     return () => {
        controller.abort()
    }
   
    }, [])
   if (loading)
     return <div className='carousel-message'>טוען...</div>
if (error)
         return <div className='carousel-message error'>{error}</div>
return <Carousel images={images} intervalSeconds={4} />
    }
