import React, { useState } from "react";
import Header from './elements/1--header';
import Area from './elements/1--area';
import Input from './elements/1--input';
import Tasks from "./elements/1--tasks-aside";
import Mod_Provider from "./logic/items.provider";

export default function App(){

    const [items, newItem] = useState([
      {
        title:'pizza',
        content: 'zrobic pizze',
        hour:"11 grudnia, 19:44"
      },
      {
        title:'kebab',
        content: 'zrobic kebaba',
        hour:"26 listopad, 11:21"
      },
      {
        title:'sushi',
        content: 'zrobic sushi',
        hour:"28 lutego, 10:45"
      }
    ]);

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
        <Mod_Provider>
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

        </Mod_Provider>
      );
}