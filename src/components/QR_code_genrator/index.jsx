import { useState } from "react";
import QRCode from "react-qr-code";



 
 
 export default function QRCodeGenrator() {

    function handleGenrateQrCode(){
        setQrCode(input)
    }

    const [qrCode,setQrCode]=useState('')
    const [input,setinput]=useState('')
    return(
        <div className="mt-13">
            <hr className="text-gray-600 mb-10" />
            <h1 className="mb-7 text-5xl">QR Code Genraotor</h1>
            <div className="mb-7" >
                <input className="border-1 border-gray-600 p-1 rounded-2xl w-50" onChange={(e)=> setinput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here"/>
                <button className="cursor-pointer bg-black p-1 mx-2 rounded-xl px-2 text-gray-400 " disabled={input && input.trim() === ''} onClick={handleGenrateQrCode}>Genrate</button>
            </div>
            <div className="items-center justify-center flex ">
                <QRCode
                className="shadow-black shadow-2xl"

                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="white"
                />
            </div>
        </div>
    )
}