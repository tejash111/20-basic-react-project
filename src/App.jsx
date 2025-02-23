import { useState } from 'react'
import './App.css'
import Accordian from './components/accordion'
import RandomColor from './components/random_color_gen'
import StarRating from './components/star_rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian/>
     <RandomColor/>
     <StarRating noOfStars={10}/>
    </>
  )
}

export default App
