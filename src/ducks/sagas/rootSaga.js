import { all } from 'redux-saga/effects';
import { fetchUsers } from './usersSaga';
import { fetchTodos } from './todosSaga';

export default function* rootSaga() {
  yield all([fetchUsers(), fetchTodos()]);
}
