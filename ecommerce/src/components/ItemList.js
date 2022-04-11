import Item from './Item';

function ItemList(items)
{
    return(
        <div>
        {items.data.map(u=>  
            <Item key={u.id} id={u.id}  title={u.title} description={u.description} price={u.price} pictureURL={u.ImageID} ></Item>
            )}    
        </div>
    );
};

export default ItemList;
