import { useReducer } from "react";
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
        const { folders, item } = action;
    
        const updatedList = folders.map((f) =>
            f.folder === item.folder
                ? { ...f, tasks: [...f.tasks, item] }
                : f
        );
    
        console.log(updatedList);

        return {
            list: updatedList,
        };
    }
    
};






const Mod_Provider = (props) =>{
    const [foldersA, action] = useReducer(work, Folders);
    

    const addFolder = (folder) => {action({type: 'ADD', folder})};
    const removeFolder = (folder) => {action({ type: 'REMOVE', folder })};
    
    const addItem = (item,folders) => {
        action({ type: 'ITEM', item, folders });
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