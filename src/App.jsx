import { useState } from 'react'
import './App.css'
import Accordian from './components/accordion'
import RandomColor from './components/random_color_gen'
import StarRating from './components/star_rating'
import ImageSlider from './components/image_slider'
import LoadMoreButton from './components/Load_more_button'
import QRCodeGenrator from './components/QR_code_genrator'
import LightAndDark from './components/Light_and_dark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian/>
     <RandomColor/>
     <StarRating noOfStars={10}/>
     <ImageSlider url={"https://picsum.photos/v2/list"} 
     limit={"10"}  page = {"1"}/>
     <LoadMoreButton/>
     <QRCodeGenrator/>
     <LightAndDark/>
    </>
  )
}

export default App
