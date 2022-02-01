import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import reactDom from 'react-dom';

reactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
