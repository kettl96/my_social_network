import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Dialogs.module.css'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';



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


  let dialogsElements = props.state.dialogs.map
    (dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);

  let messagesElements = props.state.messages.map
    (message => <Message message={message.message} id={message.id} isMine={message.isMine} />);


  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;

    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
          value={props.newMessageText}
            onChange={onMessageChange} ref={newMessageElement}
            name="" id="" cols="60" rows="4" />
        </div>
        <div><button onClick={addMessage}>Send</button></div>
      </div>
    </div>
  );
}

export default Dialogs;

