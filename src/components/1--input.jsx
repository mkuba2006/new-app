import React from 'react';

export default function Input(props){
    
    function change(){
        props.onDelete(props.id)
    }

    return(
        <div id='info'>
            <div id='first'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>

            <p>{props.hour}</p>
            <button onClick={change}>DELETE</button>
        </div>
    )
}


//id
//onDelete