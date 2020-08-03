import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList';
import {updateTodo} from '../actions';
import {VisibilityFilters} from '../actions'
const {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} = VisibilityFilters;

const getVisibleTodos = (todos,filter) =>{
    switch(filter){
        case SHOW_COMPLETED:
            return todos.filter(t=>t.complete)
        case SHOW_ACTIVE:
            return todos.filter(t=>!t.complete)
        case SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = function(state){
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    };
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onTodoClick:id=>{dispatch(updateTodo(id))}
    }
};

const VisibleTodolist = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodolist;