import React, { useState } from "react";
import Header from './1--header';
import Area from './1--area';
import Input from './1--input';

function App(){

    const [items, newItem] = useState([]);

    function add(note) {
        newItem(e =>{ 
            return[...e, note];
        })
    }

    function deleteItem(id) {
        newItem(e =>{ 
            return e.filter((item, index)=>{
                return index !== id;
            });
        });
    }


    return(
        <div>
            <Header/>
            <Area onAdd={add} />
            <div id="infos">
            {items.map((item, index) => {
                return(
                <Input id={index} title={item.title} content={item.content} onDelete={deleteItem}/>
                )
            })}
            </div>
        </div>
    )
}
export default App;