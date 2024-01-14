import React, { useState } from "react";
import Header from './elements/1--header';
import Area from './elements/1--area';
import Input from './elements/1--input';
import Tasks from "./elements/1--tasks-aside";
import Mod_Provider from "./logic/items.provider";
import Ul from "./elements/1--ul";


export default function App(){

    const [items, newItem] = useState([
      {
        title:'pizza',
        content: 'zrobic pizze',
        hour:"11 grudnia, 19:44",
        folder:"food"
      },
      // {
      //   title:'kebab',
      //   content: 'zrobic kebaba',
      //   hour:"26 listopad, 11:21",
      //   folder:"food"
      // },
      // {
      //   title:'sushi',
      //   content: 'zrobic sushi',
      //   hour:"28 lutego, 10:45",
      //   folder:"food"
      // }
    ]);

    function add(note) {
        newItem(e =>{ 
            return[...e, note];
        })
        // console.log(items);
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
          <Tasks items={items} key={Math.random()} />
          <Header />
      
          {/* {items.length === 0 ? (<p id="no">You got no plans</p>) : 
          (
            <div id="infos">
              {items.map((item, index) => (
                <Input key={index} id={index} title={item.title} folder={item.folder} content={item.content} hour={item.hour} onDelete={deleteItem} />
              ))}
            </div>
          )} */}
          <Ul/>

          <Area onAdd={add} />

        </Mod_Provider>
      );
}