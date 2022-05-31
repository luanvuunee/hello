import React, { StrictMode } from 'react';

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { render } from 'react-dom';





render(
  <StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
      <CssBaseline/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

