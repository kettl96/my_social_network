import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map
    (dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);

  let messagesElements = props.state.messages.map
    (messages => <Message message={messages.message} id={messages.id} />);


  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;

