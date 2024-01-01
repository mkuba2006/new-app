import { useReducer, useState } from "react";
import Mod_elements from "./items_context";

const Folders = {
    list: [
        {
            folder: "Food",
            tasks: [],
        },
    ],
};


const work = (prevState, action) => {
    if (action.type === 'ADD') {
        return {
            list: [...prevState.list, { folder: action.folder, tasks: [] }],
        };
    }
    else if (action.type === 'REMOVE') {
        const updatedFolders = prevState.list.filter(
            (item) => item.folder !== action.folder
        );
        return {
            list: updatedFolders,
        };
    }
    else if (action.type === 'ITEM') {
        const { folder, item } = action;
        
        console.log(prevState);
    
        // Use prevState.list.find to get the correct folder
        const existingFolder = prevState.list.find((f) => f.folder === folder);
    
        // Check if the folder exists before updating
        if (existingFolder) {
            const updatedList = prevState.list.map((f) =>
                f.folder === folder ? { ...f, tasks: [...f.tasks, item] } : f
            );
    
            return {
                list: updatedList,
            };
        } else {
            // If folder doesn't exist, you might want to handle this case
            console.error(`Folder "${folder}" not found in the state.`);
            return prevState;
        }
    }
    
};






const Mod_Provider = (props) =>{
    const [foldersA, action] = useReducer(work, Folders);
    

    const addFolder = (folder) => {action({type: 'ADD', folder})};
    const removeFolder = (folder) => {action({ type: 'REMOVE', folder })};
    
    const addItem = (item) => {
        action({ type: 'ITEM', item });
    };
    

    const context = {
        folders: foldersA.list,
        addFolder: addFolder,
        removeFolder: removeFolder,
        addItem: addItem,
    };

    return(
        <Mod_elements.Provider value={context}>
            {props.children}
        </Mod_elements.Provider>
    )

}
export default Mod_Provider;






// const [lgA, lg] = useReducer(adding,Folders)
// const addItem = (item) => {lg({ type: 'ITEM', item })};
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















const adding = (prev,act)=>{
    console.log(act.item.folder);
    console.log(prev.list);
    const foundFolder = prev.list.find(folder => folder.folder === act.item.folder);

    if (foundFolder) {
        console.log("Znaleziono folder:", foundFolder);
    } else {
        console.log("Nie znaleziono folderu o nazwie:", act.item.folder);
    }
}