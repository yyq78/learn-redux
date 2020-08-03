import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

export default connect()(function AddTodo({dispatch}){
    let input;
    return (
        <div>
            <form
                onSubmit={
                    e=>{
                        e.preventDefault();
                        dispatch(addTodo(input.value))
                        input.value=''
                    }
                }
            >
                <input 
                ref={node=>{
                    input = node
                }}
                type="text"/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
});
