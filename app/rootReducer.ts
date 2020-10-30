/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counterReducer from './features/counter/counterSlice';
import todoListReducer from './features/todoList/todoListSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    todoList: todoListReducer,
  });
}
