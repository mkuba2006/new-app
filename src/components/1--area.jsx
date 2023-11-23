import React, { useState } from "react";
import img from './plus.png'

function Area(props){

    const [note, newNote] = useState({
        title:'',
        content:''
    });

    function change(e){
        const {name, value} = e.target;
        console.log(e.target);
        newNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
          });
    }

    
    function submit(e){
        props.onAdd(note);
        newNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }


    return(
        <div>
            <form>
                <input name="title" value={note.title} onChange={change}/>
                <textarea name="content" rows="3" value={note.content} onChange={change}/>
                <button onClick={submit} id="button">
                    <img src={img} id="image"/>
                </button>
            </form>
        </div>
    )
}
export default Area;

// onAdd