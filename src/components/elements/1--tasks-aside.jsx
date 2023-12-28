import React, { useContext, useState, useRef } from 'react';
import '../styles/tasks.css';
import Mod_elements from '../logic/items_context';
import Bin from '../images/delete.png'


export default function Tasks() {
    const mtx = useContext(Mod_elements);
    const nameInputRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);

    const closeModal = () => {
        nameInputRef.current.value && mtx.addFolder(nameInputRef.current.value);
        setShowModal(false);
    };

    const undo = (item) => {
        console.log('Deleted', item);
        mtx.removeFolder(item);
    };

    return (
        <aside>
            <h1>Your tasks:</h1>
            <ul id="list">
                {mtx.folders.map((item) => (
                    <li key={item.folder}>
                        <h3>
                            {item.folder}
                            <img id='bin' src={Bin} onClick={() => undo(item.folder)} />
                        </h3>
                    </li>
                ))}
            </ul>
            {showModal && (
                <div id='modal' className='animated'>
                    <input placeholder="Place name..." id='folder_name' type='text' ref={nameInputRef} />
                    <button id='folder_submit' onClick={closeModal}>Submit</button>
                </div>
            )}

            <button id="addButton" onClick={openModal}>Create List</button>
        </aside>
    );
}
