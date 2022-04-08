import React from "react";
import ItemCount from "./ItemCount";


const Item = ({id,title, description,price,pictureURL}) =>
    {
 

    //    <ItemCount stock={10} initial={4}></ItemCount>

    return (
        <div>
        <img src={pictureURL} className="photo" alt="..." width={256}/>
        <div className="card-body text-center">
   
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} precio {price}</p>    
        </div>
        </div>
        );

    
};

export default Item;
