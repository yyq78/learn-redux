import React from 'react';
import Todo from './todo';
function TodoList ({todos,onTodoClick}) {
    return (
        <ul>
            {todos.map((todo,index)=><Todo key={todo.text} {...todo} onClick={()=>onTodoClick(index)}/>)}
        </ul>
    )
};

export default TodoList;