import ItemCount from "./ItemCount";
import Item from './Item';
import { useState } from "react";
function ItemList(items)
{
 


    return(
        <div>

        {items.data.map(u=>  
            <Item key={u.id}  title={u.title} description={u.description} price={u.price} pictureURL={u.ImageID} ></Item>
        
            )}    
        </div>
    );
};
export default ItemList;
