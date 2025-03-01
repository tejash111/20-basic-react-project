import { use, useEffect, useState } from "react";
import "./style.css"

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton,setDisableButton]=useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      
    }finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=> {
    if (products && products.length ===100) setDisableButton(true)
  },[products])

  if (loading) {
    return <div>Loading data pls wait</div>;
  }

  return (
    <div className="mt-13 ">
      <hr className="text-gray-600" />
      <h1 className="text-5xl my-6">Load More</h1>
      <div className="mt-10 product-container">
        

        {products && products.length
          ? products.map((item) => (
              <div className="product border-1 rounded-2xl border-gray-600 p-2 shadow-black shadow-2xl"  key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container mt-4 bg-gray-700 shadow-black shadow-xl p-1 rounded-2xl justify-center items-center cursor-pointer ">
            <button disabled={disableButton} className="cursor-pointer" onClick={()=> setCount(count+1)}>Load More Products</button>
            {
                disableButton? <p> you have reached to 100</p> : null
            }
      </div>
    </div>
  );
}
