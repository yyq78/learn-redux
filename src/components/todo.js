import React from 'react';

const Todo = ({onClick,complete,text})=>{
    return (
    <li
        onClick={onClick}
        style={{
            textDecoration:complete ? 'line-through':'none'
        }}
    >{text}</li>
    )
}
export default Todo