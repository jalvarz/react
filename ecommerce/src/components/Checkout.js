import React, { useContext, useEffect ,useState} from "react";
import CartContext from "../contexts/CartContext";

const Checkout = () =>{
const [precioTotal,setPrecioTotal] = useState(0);
const {cart, setCart} = useContext(CartContext)

    useEffect(()=>{
        if (cart.lenght>0){
            console.log(cart)
        setPrecioTotal(
            cart
            .map((item) => item.price * item.quantity)
            .reduce((total, valor) => total + valor)
        )
        
        }

    },[cart]
    
    )

    return(
<div>
    <h5>
        Total:{precioTotal}
    </h5>
</div>

    );
}
export default Checkout;
