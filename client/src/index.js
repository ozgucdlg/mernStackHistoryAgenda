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

// 3. in reducers
import memoriesReducer from './reducers/memoriesReducer.js'


// 4. in reducers
const reducer =  combineReducers({
  memories:memoriesReducer
})


//5. in reducers
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
  <React.StrictMode>
    //* 6 in reducers 
    <Provider  store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


