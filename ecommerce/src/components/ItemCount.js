import { useState,useEffect } from "react";

function ItemCount({ stock, initial,setQuantity,}) {
    const [count,setCount] = useState(initial);

    const add = () =>{
        setCount(count+1);
        if (count>=stock){setCount(stock)} 
    }

    const remove = () =>{
        setCount(count-1);
        if (count <=0){
            setCount(0);
        }
    }
    useEffect(()=>{
        setQuantity(count);
     },[count,setQuantity]);
 

    return (
    <div>
        <h5>Stock: {stock} </h5>
                <button className="btn btn-primary" onClick={remove}>-</button>
                <label>{count}</label>
                <button className="btn btn-primary" onClick={add}>+</button>
                <br></br>
    </div>
    )
   }

   export default ItemCount;
