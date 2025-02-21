import { use, useEffect, useState } from "react"



export default function RandomColor() {

    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor() {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#"

        for (let i =0; i<6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb')   handleCreateRandomRgbColor();
        
          else  handleCreateRandomHexColor();
    
    }, [typeOfColor])


    return(
        <div className="mt-13 text-gray-800">
            <hr className="text-gray-600" />
        <div className="mt-13 text-white ">
                <h1 className="text-5xl">Random color Genrator</h1>
                <br /> <br />
               
               <button className="mr-4 bg-gray-800 rounded-xl p-2 shadow-xl shadow-black" onClick={() => setTypeOfColor('hex')}>Create HEX Code </button>
                <button className="mr-4 bg-gray-800 rounded-xl p-2 shadow-xl shadow-black" onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                </div>  
                <button className="mr-4 bg-gray-800 rounded-xl p-2 shadow-xl shadow-black mt-3 text-white w-73 " onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Genrate random color </button>
        <div 
        

        style={
            {
                background : color,
            }
        }
        className="container h-80 mt-7 text-3xl font-semibold rounded-xl shadow-2xl shadow-black">

             
             <div className=" self-center justify-center">
             <br /> <br />
             <h3 >{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
             <br />
             <h3>{color}</h3>
             </div>
            

           
               
        </div>
        </div>

    )

}