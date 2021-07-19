import { combineReducers } from 'redux';

import * as users from './users';
import * as todos from './todos';

export const reducer = combineReducers({
  users: users.reducer,
  todos: todos.reducer,
});
export const actions = {
  users: users.actions,
  todos: todos.actions,
};
export const selectors = {
  users: users.selectors,
  todos: todos.selectors,
};
