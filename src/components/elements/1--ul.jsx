import { useContext, useEffect } from "react";
import Mod_elements from "../logic/items_context";
import Input from "./1--input";
import '../styles/ul.css';

const Ul = () => {
    const ITX = useContext(Mod_elements);

    useEffect(() => {
        console.clear();
        ITX.folders.forEach((folder, index) => {
            folder.tasks.forEach((it, i) => {
                console.log(it);
                console.log(i);
            });
        });
    }, [ITX]);

    const hasTasks = ITX.folders.some((folder) => folder.tasks.length > 0);

    return (
        <div id="ull">
            {hasTasks ? (
                ITX.folders.map((folder, index) => (
                    folder.tasks.map((it, i) => (
                        <Input key={i} id={i} title={it.title} folder={it.folder} content={it.content} hour={it.hour} />
                    ))
                ))
            ) : (
                <p id="no">You got no plans</p>
            )}
        </div>
    );
};

export default Ul;


// <Input key={index} id={index} title={folder} folder={folder} content={folder} hour={folder} onDelete={deleteItem} />