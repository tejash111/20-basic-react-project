import { useState } from 'react'
import './App.css'
import Accordian from './components/accordion'
import RandomColor from './components/random_color_gen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian/>
     <RandomColor/>
    </>
  )
}

export default App
