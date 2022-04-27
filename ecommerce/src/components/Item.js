import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";

const Item = ({id,title,description,price,pictureURL,stock}) =>
{
    const { setCart, setQnt } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

        const onAdd = () =>{
            const product = {
                id: id,
                titile: title,
                description: description,
                price: price,
                pictureURL: pictureURL,
                quantity:quantity
            };
            
            setQnt((value) => value + quantity);
            setCart((value) => [...value, product]);
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
