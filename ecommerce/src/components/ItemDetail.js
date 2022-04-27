import {useState,useContext} from "react";
import ItemCount from "./ItemCount";
import CartContext from "../contexts/CartContext";

const ItemDetail = (product) =>{
    
const { cart, setCart, setQnt } = useContext(CartContext);
const [quantity, setQuantity] = useState(1);
const onAdd = () =>{
        
  setQnt((value) => value + quantity);

  const isInCart = cart.find(prod => prod.id === product.product.id);
  if (isInCart){
      let cartTemporal = [...cart]
      for (var i in cartTemporal) {
          if (cartTemporal[i].id ===  product.product.id) {
              cartTemporal[i].quantity = cartTemporal[i].quantity+ quantity;
              break; 
          }
      }
      setCart(cartTemporal);    
  }else{
      setCart((value) => [...value, product]);
  }
}

    return(
        <div className="details col-md-6">
        <h3 className="product-title">{product.product.title}</h3>
        <p className="product-description">{product.product.descriptionExtended}</p>
        <h4 className="price">Precio: <span>{product.product.price}</span></h4>
        <div className="action">

        <ItemCount stock ={product.product.stock} initial ={1} id={product.product.id} setQuantity={setQuantity}/>
            <button className="add-to-cart btn btn-default" type="button" onClick={onAdd}>Agregar al carrito</button>
        </div>
    </div>
    )
  }

    export default ItemDetail
