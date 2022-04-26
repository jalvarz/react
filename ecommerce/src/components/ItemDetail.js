import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore} from 'firebase/firestore'

const ItemDetail = ({producto}) =>{
    const {detalleId} = useParams()
    //console.log(detalleId);

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const pictureURL= '2'
    const title='2'
    const description = 'd'
    const price = 3

    useEffect(() => {
        let isSubscribed = true;
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.getDoc(detalleId);
    
        item
          .get()
          .then((doc) => {
            if (!doc.exists) {
              //console.log("Item does not exist!");
              return;
            }
            if (isSubscribed) {
              //console.log("Item found!");
              setProduct({ id: doc.id, ...doc.data() });
            }
          })
          .catch((error) => {
            //console.log("Error searching items", error);
          })
          .finally(() => {
            setLoading(false);
          });
    
        return () => (isSubscribed = false);
      }, [detalleId]);

    return(
        <div>
          <img src={pictureURL} className="photo" alt="..." width={256}/>
          <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description} precio {price}</p>
   
              <ItemCount/>
                  
          </div>
        </div>
        )
    }

    export default ItemDetail
