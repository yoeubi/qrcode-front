import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './reset.scss';
import './index.scss';
import { createStore } from 'redux';
import modules from './modules';
import { Provider } from 'react-redux';

const store = createStore(modules);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
