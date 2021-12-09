

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'

let _callSubscriber = (state) => {
  ReactDOM.render(
    <BrowserRouter>
         <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root')
  );
}


_callSubscriber(store.getState());

store.subscribe(_callSubscriber);