import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSlice';
import dashboardReducer from 'features/dashboard/dasboardSlice';
import createSagaMiddleware from 'redux-saga';
import { history } from 'ultils';
import rootSaga from './rootSaga';


const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  dashboard: dashboardReducer
})

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer:
    rootReducer,
  // counter: counterReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga) // luon duoc goi sau khi config store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
