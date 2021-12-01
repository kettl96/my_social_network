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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name='Dimych' id='1'/>
        <DialogItem name='andeys' id='2'/>
        <DialogItem name='sasha' id='3'/>
        <DialogItem name='hover' id='4'/>
        <DialogItem name='hren' id='5'/>       
      </div>
      <div className={s.messages}>
        <Message message='hii'/>
        <Message message='hi woh ypure'/>
        <Message message='yo'/>
        <Message message='yo'/>
        <Message message='yo'/>
       </div>
    </div>
  );
}

export default Dialogs;