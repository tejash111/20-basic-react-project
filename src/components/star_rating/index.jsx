import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'

export default function StarRating({noOfStars = 5}) {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    function handleClick(getCurrentIndex){
      setRating(getCurrentIndex)
      
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

  return (
    <div className="mt-13">
      <hr className="text-gray-600" />
      <div className="mt-13 justify-center "> 
        <h1 className="text-5xl">Star Rating</h1>
        <div className="flex justify-center mt-12">
        {[...Array(noOfStars)].map((_, index) =>{
            index+=1;
            return(
                <FaStar
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
                />
    
            )
        })}
        </div>
      </div>
    </div>
  );
}
