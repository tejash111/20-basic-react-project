//single selectionb

import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
    
  const [enablemultiSelection,setEnableMultiSelection]= useState(false);
  const [multiSelection,setMultiSelection]= useState([]);

  

  function handlesingleselection(getcurrentId) {
    setSelected(getcurrentId === selected ? null : getcurrentId);
  }

  function handlemultiselection(getcurrentId) {
    let cypMultiple = [...multiSelection]
    const findIndexofCurrentId = cypMultiple.indexOf(getcurrentId)
    if (findIndexofCurrentId === -1) cypMultiple.push(getcurrentId)
        else cypMultiple.splice(findIndexofCurrentId ,1 )
    setMultiSelection(cypMultiple)
  }
  return (

    <div className="wrapperclass flex justify-center items-center h-full w-full ">
        
      <div className="accordian w-200 ">
      <h1 className="text-5xl bg-transparent mb-10">Accordian</h1>
      <button className="mb-2 border-0 border-gray-700 w-44 p-2 rounded-xl bg-gray-800 shadow-xl shadow-black cursor-pointer " onClick={() => setEnableMultiSelection(!enablemultiSelection)}>Enable multi selection</button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={  enablemultiSelection ?  
                    () => handlemultiselection(dataItem.id) 
                    : () => handlesingleselection(dataItem.id)}
                className="title bg-gray-800 m-3 rounded-2xl shadow-black shadow-2xl p-1 pt-2 cursor-pointer   "
              >
                <h3 className="ml-3">{dataItem.question}</h3>
                <span className="mr-5 flex flex-row-reverse text-xl ">{selected === dataItem.id ? "-" : "+"}</span>
             
              
              {
                enablemultiSelection ? multiSelection.indexOf(dataItem.id) !== -1 && <div className="content text-white h-auto flex "> {dataItem.answer} </div> 
                : selected === dataItem.id && <div className="content text-white h-auto flex "> {dataItem.answer} </div>
                
              }
            </div>
            </div >
          ))
        ) : (
          <div>No data found </div>
        )}
      </div>
    </div>
  );
}
