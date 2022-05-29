import { all } from 'redux-saga/effects';

function* firstSaga() {
  console.log('hele');
}

export default function* rootSaga() {
  yield all([firstSaga()]); 
}
 