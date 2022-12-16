import { useState } from "react";
import { useEffect } from "react";

const UseEffectHoook = () => {
  const [count, setCount] = useState(0);
  const [collection, setCollection]=useState(0)
    
  useEffect(() => {
    setCollection(()=>count*2)
  },[count] );

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h1>Count {count}</h1>
        <button onClick={(e)=>setCount(count+1)} >+</button>  
        <h2>Collection: {collection}</h2>                  
        </div>
      </div>
    </div>
  );
};

export default UseEffectHoook;
