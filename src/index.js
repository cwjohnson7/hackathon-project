import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [promise],
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


