import { authSaga } from 'features/auth/authSaga';
import { all } from 'redux-saga/effects';

function* firstSaga() {
  
}

export default function* rootSaga() {
  yield all([firstSaga(),authSaga()]); 
}
 