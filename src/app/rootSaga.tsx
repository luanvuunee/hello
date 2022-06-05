import { authSaga } from 'features/auth/authSaga';
import dashboardSaga from 'features/dashboard/dashboardSaga';
import { all } from 'redux-saga/effects';

function* firstSaga() {
  
}

export default function* rootSaga() {
  yield all([firstSaga(),authSaga(),dashboardSaga()]); 
}
 