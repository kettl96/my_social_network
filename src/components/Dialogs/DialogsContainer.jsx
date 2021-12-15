import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Dialogs.module.css'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }


  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  }
  return (<Dialogs updateNewMessage={onMessageChange}
  sendMessage={addMessage} dialogsPage={state} />
  );
}

export default DialogsContainer;

