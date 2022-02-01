let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 2, name: 'andeys', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 3, name: 'sasha', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 4, name: 'hover', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 5, name: 'hren', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
  ],

  messages: [
    { id: 1, message: 'hi', isMine: true },
    { id: 2, message: 'how is you day', isMine: false },
    { id: 3, message: 'yo', isMine: true },
    { id: 4, message: 'jjhfhjbhddjfhjdh', isMine: false },
    { id: 5, message: 'jskfdjfjklsnfjlksdnfsnjdnfjksndj', isMine: true }
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATE-NEW-MESSAGE-TEXT':
      return {
        ...state,
        newMessageText: action.newText
      };
    case 'ADD-MESSAGE':
      let newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      };      
    default:
      return state;
  }

}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
  }
}

export default dialogsReducer;