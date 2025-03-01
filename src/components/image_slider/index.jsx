import { useState ,useEffect} from "react"
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css"




export default function ImageSlider({url,limit=5,page=1}) {

    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0)
    const [errorMsg,setErrorMsg]=useState(null)
    const [loading,setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try{
            setLoading(true)


            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if(data){
                setImages(data)
              
            }

        }catch(e){
            setErrorMsg(e.message)
        } finally{
            setLoading(false)
        }
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide=== 0 ? images.length-1 : currentSlide -1)
    }
    function handleNext (){
        setCurrentSlide(currentSlide=== images.length-1? 0 : currentSlide +1)
    }

    useEffect(() => {
        if(url !== ''){
            fetchImages(url)
        }
    },[url])

    console.log(images);
    
    if (loading){
        return <div>rloading data pls wait</div>
    }

    
    return (
        <div className="mt-14">
            <hr className="text-gray-600"/>
            <h1 className="mb-8 mt-13 text-5xl flex-nowrap">Image slider</h1>

            <div className="mt-15 flex relative justify-center items-center h-80 w-fit sga">
            
                <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow-left arrow "/>
                {
                    images && images.length?
                    images.map((imageItem,index)=> (
                        <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className= {currentSlide === index? "current-image" : "current-image hide-current-image"}
                        />                       
                    ))
                    : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className="arrow-right arrow "/>
                <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
            </div>
      
        </div>
    )
}