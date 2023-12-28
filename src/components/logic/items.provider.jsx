import { useReducer, useState } from "react";
import Mod_elements from "./items_context";

const Folders = {
    list : []
};

const work = (prevState, action) => {
    console.log([...prevState.list, { folder: action.folder, tasks: [] }]);
    if (action.type === 'ADD') {
        return {
            list: [...prevState.list, { folder: action.folder, tasks: [] }],
        };
    } else{
        const updatedFolders = prevState.list.filter(
            (item) => item.folder !== action.folder
        );
        return {
            list: updatedFolders,
        };
    }
};




const Mod_Provider = (props) =>{
    const [foldersA, action] = useReducer(work,Folders)
    const addFolder = (folder) => {action({type: 'ADD', folder})};
    const removeFolder = (folder) => {action({ type: 'REMOVE', folder });};

    
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