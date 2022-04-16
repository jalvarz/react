import React, { useContext } from "react";
import Checkout from "./Checkout";
import CartContext from "../contexts/CartContext";
import CartTable from "./CartTable";
const CartMain = ()=>{

    const {cart} = useContext(CartContext);

    return(
        <div>
            <CartTable/>
            <Checkout/>
        </div>
    );
}

export default CartMain
