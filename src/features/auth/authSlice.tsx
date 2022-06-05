import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';


export interface LoggingPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state:AuthState, action: PayloadAction<LoggingPayload>) {
      state.logging = true
    },
    loginSuccess(state:AuthState, action: PayloadAction<User>) {
      state.isLoggedIn = true
      state.logging = false
      state.currentUser = action.payload

    },
    loginFailed(state:AuthState, action: PayloadAction<string>) {
      state.logging = false
    },
    logOut(state:AuthState) {
      state.isLoggedIn = false
      state.currentUser  = undefined
    },
  },
});

// ACTIONS
export const authAction = authSlice.actions;

// SELECTOR
export const selectedIsLoggedIn =(state:any)=> state.auth.isLoggedIn
export const selectedIsLogging =(state:any)=> state.auth.logging
// REDUCER
const authReducer = authSlice.reducer;
export default authReducer;
