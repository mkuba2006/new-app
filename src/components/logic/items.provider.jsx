import { useReducer, useState } from "react";
import Mod_elements from "./items_context";

const Folders= { folders: [], totalAmount: 0 };

const work = (old, now)=>{
    console.log(now);
}


const Mod_Provider = (props) =>{
    const [folders, action] = useReducer(work,Folders)


    const addFolder = (folder) =>{action({type: 'ADD', folder: folder})};
    const removeFolder =(folder) =>{action({type: 'REMOVE', folder: folder})};

    const context ={
        folders: folders,
        addFolder: addFolder,
        removeFolder: removeFolder,
    }

    return(
        <Mod_elements.Provider value={context}>
            {props.children}
        </Mod_elements.Provider>
    )

}
export default Mod_Provider;