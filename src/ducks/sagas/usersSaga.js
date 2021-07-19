import { put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { actions } from '../ducks';

function requestUser() {
  return axios.request({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  });
}
export function* fetchUsers() {
  const products = yield call(requestUser);
  yield put(actions.users.setUsers(products.data));
}
