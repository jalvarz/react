import ItemCount from "./ItemCount";
import Item from './Item';
import { useState } from "react";
import ItemList from "./ItemList";
function ItemListContainer()
{

    console.log("se ejecuta ItemListContainer")

    return(
        <div>
        <h3>Catalogo de productos</h3>
        <ItemList/>
        </div>
    );
};
export default ItemListContainer;
