import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {LoginPage} from './pages/LoginPage' ;
import {store} from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <LoginPage/>
  </Provider>,
  document.getElementById('root')
);
