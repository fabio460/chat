import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App6';

import {Provider} from 'react-redux'
import combineReducers from './Redux/combineReducer'
import { createStore} from 'redux'
const store = createStore(combineReducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


