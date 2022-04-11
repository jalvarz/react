import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const Item = ({id,title, description,price,pictureURL}) =>
    {
        
        console.log(price)
        //    <ItemCount stock={10} initial={4}></ItemCount>
      //  console.log(id)
        return (
            <div>
        <img src={pictureURL} className="photo" alt="..." width={256}/>
        <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <Link to={`/item/${id}`}> Detalle </Link>
            <p className="card-text">{description} precio {price}</p>    
            
        </div>
        </div>
        );

};

export default Item;
