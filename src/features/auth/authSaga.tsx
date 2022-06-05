import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction, LoggingPayload } from './authSlice';

function* handleLogin(payload: LoggingPayload) {

  try {
    yield delay(1500)
    localStorage.setItem('token', '912837489234892')
    yield put(authAction.loginSuccess({
      id: 1,
      name: 'Vy'

    }))
    yield put(push('/admin/dashboard'))
    

  } catch (error) {
    // yield put(authAction.loginFailed())

  }

}
function* handleLogout() {
  yield delay(1500)
  localStorage.removeItem('token')
  yield put(push('/login'))
}
function* WatchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoggingPayload> = yield take(authAction.login.type)
    yield fork(handleLogin, action.payload) // b2 khi ma nguoi dung dispatch  login  => chay handle login chay xong xuong duoi coi logut


    //LOGOUT=>>
    yield take(authAction.logOut.type)
    yield call(handleLogout)
  }

}

export function* authSaga() {
  yield fork(WatchLoginFlow) //b1 chay tu day
}
