import './src/init.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import store from './src/store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
         <Main/>
     </Provider>,
    document.getElementById("app")
   )