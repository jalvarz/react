import React, { useContext, useEffect ,useState} from "react";
import CartContext from "../contexts/CartContext";

const Checkout = () =>{
const [precioTotal,setPrecioTotal] = useState(0);
const { cart } = useContext(CartContext)

    useEffect(()=>{
        if (cart.length > 0){
        setPrecioTotal(cart
            .map((item) => item.price * item.quantity)
            .reduce((total, valor) => total + valor))
        }
        },[cart]
    )

    return(
<div>
    <h2>
        Total:{precioTotal}
    </h2>
</div>

    );
}
export default Checkout;
