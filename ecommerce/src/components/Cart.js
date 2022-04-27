import React, { useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Cart = ()=>{
    const {cart,setCart,setQnt} = useContext(CartContext)
    const [totalAmount,setTotalAmount] = useState(0);

    const deleteProduct = (index) => {
      setCart(cart.filter((product, i) => i !== index));
    };
    
    useEffect(() => {
        if (cart.length > 0){
          setTotalAmount(cart
            .map((item) => item.price * item.quantity)
            .reduce((total, valor) => total + valor))
          }
        },[cart,setQnt])
        
        const emptyCart = (
          <div>
              <h5 >parece que tu carrito esta vacio</h5>
              <Link to="/" className="btn btn-primary">
                ver productos
              </Link>
          </div>
        );

    return (
      <div>
        {cart.length === 0 ? (
         emptyCart
          ) : (
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
              Total:{totalAmount}
          </h2>
          <h2>
              <Link to={`/checkout/`} className="btn btn-primary"> Comprar </Link>
          </h2>  
          </div> 
          )
        }
    </div>
    );
  }

export default Cart
