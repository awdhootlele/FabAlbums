import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
