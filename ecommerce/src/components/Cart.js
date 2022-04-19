import React, { useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Cart = ()=>{

    const {cart,setCart} = useContext(CartContext)

    const deleteProduct = (index) => {
      setCart(cart.filter((product, i) => i !== index));
    };
    
    
    const [precioTotal,setPrecioTotal] = useState(0);


    useEffect(()=>{
        if (cart.length > 0){
        setPrecioTotal(cart
            .map((item) => item.price * item.quantity)
            .reduce((total, valor) => total + valor))
        }
        },[cart]
    )


    return (
        <div className="table-data">
          <div className="table-data__title">
            <h1>Carrito</h1>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Artículo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.description}
                  
                  <img src={item.pictureURL} className="photo" alt="..." width={64}/> 
                  </th>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity * item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <h2>
            Total:{precioTotal}
        </h2>
        <h2>

            <Link to={`/checkout/`} className="btn btn-primary"> Comprar </Link>
        </h2>
        
        </div>
      );


}

export default Cart
