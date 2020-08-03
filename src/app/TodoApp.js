import React from 'react';
import VisibleTodolist from '../container/VisibleTodolist';
import Footer from '../components/Footer';
import AddTodo from '../container/AddTodo';
function TodoApp() {
  return (
    <div>
        <AddTodo/>
        <VisibleTodolist />
        <Footer/>
    </div>
  )
}

export default TodoApp;
