import ItemCount from "./ItemCount";
function ItemListContainer()
{
    console.log("se ejecuta ItemListContainer")
  
    return(
        <div>
        <h3>Catalogo de productos</h3>
        
        <ItemCount initial={1} stock={10} > </ItemCount>
        </div>
        
    );
};
export default ItemListContainer;
