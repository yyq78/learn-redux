import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import TodoApp from '../app/TodoApp';
import Other from '../app/Other';
const Root = ({store})=>(
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={TodoApp}></Route>
        <Route path="/other" component={Other}></Route>
      </Router>
    </Provider>
)
export default Root;