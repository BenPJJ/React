import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreators';
import axios from 'axios';

function* mySaga() {
  // 等待捕获action
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  const res = yield axios.get('http://localhost:8000');
  yield put(getListAction(res.data.data))
}

export default mySaga;