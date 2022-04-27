import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs,collection, getFirestore,query,where } from 'firebase/firestore'
function ItemListContainer(category)
{   


    const [products, setProducts] = useState([]);
    const [setLoading] = useState(false);
    const {categoryId} = useParams();


    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        let itemsCollection = collection(db,'items');
        if (categoryId)
        {
            itemsCollection = query(collection(db,'items'), where('categoryID','==',categoryId));
        } else{
            itemsCollection = query(collection(db,'items'));
        }

        getDocs(itemsCollection).then((snapshot)=>{
            if (snapshot.size===0){
                //console.log("no results");
            }
            setProducts(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));
        });


},[categoryId]);
    return(
        <div>
            <h3>Catalogo {categoryId}</h3>
            <ItemList data = {products}/>
        </div>
    );
};

export default ItemListContainer;
