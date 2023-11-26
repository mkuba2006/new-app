import React, { useState } from "react";
import Header from './1--header';
import Area from './1--area';
import Input from './1--input';
import Tasks from "./1--tasks-aside";


export default function App(){

    const [items, newItem] = useState([]);

    function add(note) {
        newItem(e =>{ 
            return[...e, note];
        })
        console.log(items);
    }

    function deleteItem(id) {
        newItem(e =>{ 
            return e.filter((item, index)=>{
                return index !== id;
            });
        });
    }


    return (
        <div>
          <Tasks items={items} />
          <Header />
      
          {items.length === 0 ? (<p id="no">You got no plans</p>) : 
          (
            <div id="infos">
              {items.map((item, index) => (
                <Input key={index} id={index} title={item.title} content={item.content} hour={item.hour} onDelete={deleteItem} />
              ))}
            </div>
          )}

          <Area onAdd={add} />

        </div>
      );
}