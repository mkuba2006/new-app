import React from 'react';

function Input(props){
    
    function change(){
        props.onDelete(props.id)
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={change}>DELETE</button>
        </div>
    )
}
export default Input;


//id
//onDelete