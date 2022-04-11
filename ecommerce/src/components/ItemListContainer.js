import ItemCount from "./ItemCount";
import Item from './Item';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Firestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { doc,getDocs,collection, getDoc, getFirestore, QuerySnapshot,query,where } from 'firebase/firestore'
import userEvent from "@testing-library/user-event";
function ItemListContainer(data)
{   
 //   console.log("datita", data)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        let itemsCollection = collection(db,'items');
        if (categoryId)
        {
            itemsCollection = query(collection(db,'items'), where('categoryID','==',categoryId));
        } 

        getDocs(itemsCollection).then((snapshot)=>{
            if (snapshot.size===0){
                console.log("no results");

            }
            setProducts(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));

          
        });

},[]);

  //  console.log("se ejecuta ItemListContainer")

    return(
        <div>
        <h3>Catalogo de productos</h3>
        <ItemList data = {products}/>
        </div>
    );
};


export default ItemListContainer;
