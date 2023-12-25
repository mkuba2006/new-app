import React, { useContext, useState, useRef } from 'react';
import '../styles/tasks.css';
import Mod_elements from '../logic/items_context';

export default function Tasks({ items }) {
    const mtx = useContext(Mod_elements);
    const name = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const push = () => {
        if(name.current.value !=''){
            mtx.addFolder(name.current.value);
        }
        
        document.getElementById('modal').style.left = '-400px';
        
        setTimeout(() => {
            setShowModal(false);
        }, 400);
        
    };

    const act = () => {
        setShowModal(true)
    }

    return (
        <aside>
            <h1>Your tasks:</h1>
            <ul id="list">
                {/* {items.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                    </li>
                ))} */}
                {mtx.folders.map((item, index) => (
                    <li key={index}>
                        <h3>{item}</h3>
                    </li>
                ))}

            </ul>
            {showModal && (
                <div id='modal' className={showModal ? 'animated' : ''}>
                    <input placeholder="Place name..." id='folder_name' type='text' ref={name} />
                    <button id='folder_submit' onClick={push}>Submit</button>
                </div>
            )}
    
            <button id="addButton" onClick={act}>Create List</button>
        </aside>
    );
}
