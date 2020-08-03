import {
    ADD_TODO,
    UPDATE_TODO,
}from '../actions'
export const todos = function(state = [],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    complete:false,
                }
            ];
        case UPDATE_TODO:
            return state.map((todo,index) => {
                if(index === action.id){
                    return {
                        ...todo,
                        complete:!todo.complete
                    }
                }
                return todo;
            })
        default:
            return state;
    }
}