import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* acilan reducerlari index sayfasinda izleyebilmek icin provider kullanacagiz */
import {Provider} from 'react-redux' 


/* they are the packages about redux */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import './bootstrap.min.css'

import memoriesReducer from './reducers/memoriesReducer.js'

const reducer =  combineReducers({
  memories:memoriesReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


