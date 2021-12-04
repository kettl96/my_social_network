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
const Dialogs = () => {

  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'andeys' },
    { id: 3, name: 'sasha' },
    { id: 4, name: 'hover' },
    { id: 5, name: 'hren' },
  ];

  let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how is you day' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'yo' },
    { id: 5, message: 'yo' }
  ];


  let dialogsElements = dialogs.map
    (d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = messages.map
    (m => <Message message={m.message} id={m.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;

