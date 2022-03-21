import ItemCount from "./ItemCount";
import Item from './Item';
import { useState } from "react";
function ItemList()
{
    const items=[]
    const db = new Promise((resolve,reject)=>{
        //simula cargar de base de datos
        items.push(
            {id:1,title:'Cofre Loco',description:'ejemplo de cofre loco',price:'20',pictureURL:'assets/1.png'},
            {id:2,title:'Diamante Loco',description:'ejemplo de diamante loco',price:'10',pictureURL:'assets/2.png'},
            {id:3,title:'Cañon Loco',description:'ejemplo de cañoncito loco',price:'15',pictureURL:'assets/3.png'}
            )
            setTimeout(resolve, 2000);
    });

    db.then(
        resolve=>{
            console.log(items);
        }
    , 
        err =>{
        console.log('error');
        }
    )

    console.log("se ejecuta ItemList")

    return(
        <div>

        {items.map(u=>  
            <Item key={u.id} title={u.title} description={u.description} price={u.price} pictureURL={u.pictureURL} ></Item>
        
            )}    
        </div>
    );
};
export default ItemList;
