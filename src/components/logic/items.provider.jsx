import { useReducer, useState } from "react";
import Mod_elements from "./items_context";

const Folders = {
    list : []
};

const work = (prevent,folder)=>{
    let NewFolders = [...prevent.list];
    let f = {
        folder,
        tasks: []
    }

    NewFolders.push(f);
    console.log(NewFolders);


    return {
        list: NewFolders,
    };
}


const Mod_Provider = (props) =>{
    const [foldersA, action] = useReducer(work,Folders)


    const addFolder = (folder) =>{action({folder})};
    const removeFolder =(folder) =>{action({type: 'REMOVE', folder: folder})};

    const context ={
        folders: foldersA.list,
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







// const work = (old, now)=>{
//     let NewFolders = [...old.list];
//     if(now.type == 'ADD'){
//         NewFolders.push(now);
//         console.log(now);
//         console.log(old);
//         console.log(NewFolders);

//     }
//     return {
//         list: NewFolders,
//     };
// }