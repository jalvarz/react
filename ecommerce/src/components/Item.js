import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";

const Item = ({id,title,description,price,pictureURL,stock}) =>
{
    const { cart, setCart, setQnt } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

        const onAdd = () =>{
        
            setQnt((value) => value + quantity);
            const product = {
                id: id,
                titile: title,
                description: description,
                price: price,
                pictureURL: pictureURL,
                quantity:quantity
            };

            const isInCart = cart.find(prod => prod.id === id);
            if (isInCart){
                let cartTemporal = [...cart]
                for (var i in cartTemporal) {
                    if (cartTemporal[i].id ===  id) {
                        cartTemporal[i].quantity = cartTemporal[i].quantity+ quantity;
                        break; 
                    }
                }
                setCart(cartTemporal);    
            }else{
                setCart((value) => [...value, product]);
            }
        }

        return (
            <div>
                <img src={pictureURL} className="photo" alt="..." width={256}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                        <Link to={`/item/${id}`}> Detalle </Link>
                        <ItemCount stock ={stock} initial ={1} id={id} setQuantity={setQuantity}/>
                        <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                    <p className="card-text">{description} precio {price}</p>        
                </div>
            </div>
        );
};

export default Item;
