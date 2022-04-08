import { useParams } from "react-router-dom";


import ItemCount from "./ItemCount";
import Item from './Item';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Firestore } from "firebase/firestore";

import { doc,getDocs,collection, getDoc, getFirestore, QuerySnapshot } from 'firebase/firestore'

const ItemDetail = ({producto}) =>{
    const {detalleId} = useParams()
    console.log(detalleId);

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const pictureURL= '2'
    const title='2'
    const description = 'd'
    const price = 3

  
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
  
        const itemsCollection = collection(db,'items');
        getDocs(itemsCollection).then((snapshot)=>{
            if (snapshot.size===0){
                console.log("no results");

            }
            setProduct(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));

        });

    console.log(product)

},[]);


    return(
        <div>
        <img src={pictureURL} className="photo" alt="..." width={256}/>
        <div className="card-body text-center">
   
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} precio {price}</p>    
        </div>
        </div>
        )
    }

    export default ItemDetail
