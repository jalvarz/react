import ItemCount from "./ItemCount";
import Item from './Item';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Firestore } from "firebase/firestore";

import { doc,getDocs,collection, getDoc, getFirestore, QuerySnapshot } from 'firebase/firestore'
function ItemListContainer()
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


  
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
  
        const itemsCollection = collection(db,'items');
        getDocs(itemsCollection).then((snapshot)=>{
            if (snapshot.size===0){
                console.log("no results");

            }
            setProducts(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));

        });

    console.log(products)
},[]);

    console.log("se ejecuta ItemListContainer")

    return(
        <div>
        <h3>Catalogo de productos</h3>
        <ItemList/>
        </div>
    );
};


export default ItemListContainer;
