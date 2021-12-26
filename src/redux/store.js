import {createStore, combineReducers, applyMiddleware} from 'redux';
import {todoReducer} from './todo/todoReducer';
import {userReducer} from './user/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

