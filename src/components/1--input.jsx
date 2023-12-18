import React from 'react';
import classes from './styles/input.module.css'

export default function Input(props){
    
    function change(){
        props.onDelete(props.id)
    }

    return(
        <div className={classes.info}>
            <div className={classes.first}>
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