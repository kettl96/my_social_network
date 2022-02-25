import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import reactDom from 'react-dom';

reactDom.render(
  <HashRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root')
);
