import { useState } from 'react'
import './App.css'
import Accordian from './components/accordion'
import RandomColor from './components/random_color_gen'
import StarRating from './components/star_rating'
import ImageSlider from './components/image_slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian/>
     <RandomColor/>
     <StarRating noOfStars={10}/>
     <ImageSlider url={"https://picsum.photos/v2/list"} 
     limit={"10"}  page = {"1"}/>
    </>
  )
}

export default App
