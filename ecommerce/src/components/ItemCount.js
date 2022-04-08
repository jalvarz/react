import { click } from "@testing-library/user-event/dist/click";

import { useState } from "react";

function ItemCount({ stock, initial }) {
    // Desarrollar lógica
    console.log(stock)
    const [count,setCount] = useState(initial); //se inicializa en 0

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

    const onAdd = () =>{
        console.log("se ejecuta onAdd con ",count);
    }

    return (
    <div>
    <img src="assets/1.png" className="photo" alt="..." width={256}/>
    <div className="card-body text-center">
        <h5 className="card-title">Cofre loco</h5>
        <p className="card-text">ejemplo de tarjetita de ecommerce. stock actual: {stock}</p>
            <button className="btn btn-primary" onClick={restar}>-</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={sumar}>+</button>
            <br></br>
            <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>

    </div>
</div>

    )
   }

   export default ItemCount;
