import React, { StrictMode } from 'react';

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { history } from 'ultils';
import './index.css';


import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

