import React from 'react';
import './styles/tasks.css';


export default function Tasks({items}){
    
    return(
        <aside>
            <h1>Your tasks:</h1>
            <ul id="list">
                {items.map((item,index)=>{
                    return(
                        <li key={index}>
                            <h3>{item.title}</h3>
                        </li>
                    )
                })}
            </ul>

            <button id="addButton">Create item</button>
        </aside>
    )
}
