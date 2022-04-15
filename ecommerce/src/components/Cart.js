import React, { useContext } from "react";
import Checkout from "./Checkout";
import CartContext from "../contexts/CartContext";
import CartTable from "./CartTable";
const Cart = ()=>{
    const {cart} = useContext(CartContext);

    console.log("se ejecuta item")
    return(
        <div>
            <CartTable/>
            <Checkout/>
        </div>
    );
}

export default Cart
