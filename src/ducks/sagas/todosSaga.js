import { put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { actions } from '../ducks';

function requestTodos() {
  return axios.request({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
  });
}
export function* fetchTodos() {
  const products = yield call(requestTodos);
  yield put(actions.todos.setTodos(products.data));
}
