import { useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import Cart from "./Cart";
function ItemCount({ stock, initial,setQuantity }) {
    const { setCart, setQnt } = useContext(CartContext);
  //  console.log(stock)
  //  console.log(initial)
  //  console.log(setQuantity)
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
       // setQuantity(count);
    },[count,setQuantity]);

    const eventAdd = (evt)=> {
        console.log('clicked')
    }

    const onAdd = (evt) =>{
        console.log("se ejecuta onAdd con ",count);
        const prod = {
            id: 20
          };
      
          setCart((value) => [...value, prod]);

       
    }

//console.log("cont")
    return (
    <div>
        <h5>Stock: {stock} </h5>
                <button className="btn btn-primary" onClick={restar}>-</button>
                <label>{count}</label>
                <button className="btn btn-primary" onClick={sumar}>+</button>
                <br></br>
                <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
    </div>

    )
   }

   export default ItemCount;
