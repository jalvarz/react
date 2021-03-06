import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer(data)

{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {detailId} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const item = doc(db, 'items', detailId);

        getDoc(item).then((snapshot)=>{
            if (snapshot.exists()){
                setProduct({id: snapshot.id, ...snapshot.data() });
            }
            })
        .catch((error) => {
            console.log("error recuperando datos")
            })
        .finally(() => {
            setLoading(false);
        })
        },[detailId]);

        
    return(
    <div>
        {loading ? (
            <div className="loading-items">
                <h1>Cargando productos... </h1>
            </div>
         ) : (       
        <div>         
            <h3>Detalle de Producto</h3>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={product.ImageID} alt='imagen'/></div>
                                </div> 
                            </div>
                            <ItemDetail product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
   );
};

export default ItemDetailContainer;
