import { useEffect, useState } from "react";

function ItemCount({ stock, initial,setQuantity,}) {
    const [count,setCount] = useState(initial);

    const sumar = () =>{
        setCount(count+1);
        if (count>=stock){setCount(stock)} 
    }

    const restar = () =>{
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
                <button className="btn btn-primary" onClick={restar}>-</button>
                <label>{count}</label>
                <button className="btn btn-primary" onClick={sumar}>+</button>
                <br></br>
    </div>
    )
   }

   export default ItemCount;
