import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartTable = () => {

    const {cart, setCart} = useContext(CartContext)

    const deleteProduct =(index)=>{
        console.log(index)
    }

 //   console.log(cart)

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
        </div>
      );

}

export default CartTable