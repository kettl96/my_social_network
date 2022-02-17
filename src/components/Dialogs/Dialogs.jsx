import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import s from './Dialogs.module.css'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from './../common/FormControls/FormsControls';
import { required } from './../../utils/validators';

const DialogItem = (props) => {
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>
      <img src={props.img} />{props.name}
    </NavLink>
  </div>
}

const Message = (props) => {

  let isMine = (isMine) => {
    if (isMine) {
      return s.messageLeft;
    } else {
      return s.messageRight;
    }

  };
  return <div className={s.message + ' ' + isMine(props.isMine)}>
    <div className={s.innerMessage}>{props.message}</div>
  </div>
}

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog =>
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} />);

  let messagesElements = state.messages.map(message =>
    <Message message={message.message} key={message.id} id={message.id} isMine={message.isMine} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newMessageBody'
          placeholder='Enter your message' validate={required} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;

