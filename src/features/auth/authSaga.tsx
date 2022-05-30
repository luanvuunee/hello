import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authAction, LoggingPayload } from './authSlice';

function* handleLogin(payload: LoggingPayload) {
  console.log("da fake logint",payload);
}



function* handleLogout() {
  console.log("da fake logout")
}
function* WatchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoggingPayload>  = yield take(authAction.login.type)
    yield fork(handleLogin, action.payload) // b2 khi ma nguoi dung dispatch  login  => chay handle login chay xong xuong duoi coi logut
  
  
  //LOGOUT=>>
    yield take(authAction.logOut.type)
    yield fork(handleLogout)
  }



}

export function* authSaga() {
  yield fork(WatchLoginFlow) //b1 chay tu day
}
