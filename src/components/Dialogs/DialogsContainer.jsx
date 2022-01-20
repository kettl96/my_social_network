import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





// const DialogsContainer = (props) => {

//   let state = props.store.getState().dialogsPage;

//   let addMessage = () => {
//     props.dispatch(addMessageActionCreator());
//   }


//   let onMessageChange = (text) => {
//     let action = updateNewMessageTextActionCreator(text);
//     props.dispatch(action);
//   }
//   return (<Dialogs updateNewMessage={onMessageChange}
//   sendMessage={addMessage} dialogsPage={state} />
//   );
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
updateNewMessage: () => {
  dispatch(addMessageActionCreator())
},
sendMessage: (text) => {
  dispatch(updateNewMessageTextActionCreator(text))
}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
export default DialogsContainer;

