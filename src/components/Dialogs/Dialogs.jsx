import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>
      <img src={props.img}/>{props.name}
    </NavLink>
  </div>
}

const Message = (props) => {
  
  let isMine = (isMine) => {
    if (isMine){
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
  let dialogsElements = props.state.dialogs.map
    (dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    console.log(dialogsElements);

  let messagesElements = props.state.messages.map
    (message => <Message message={message.message} id={message.id} isMine={message.isMine}/>);


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

