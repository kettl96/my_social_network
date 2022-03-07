const ADD_MESSAGE = 'ADD-MESSAGE'

type DialogType = {
  id: number
  name: string
  img: string
}
type MessageType = {
  id: number
  message: string
  isMine: boolean
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 2, name: 'andeys', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 3, name: 'sasha', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 4, name: 'hover', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
    { id: 5, name: 'hren', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'hi', isMine: true },
    { id: 2, message: 'how is you day', isMine: false },
    { id: 3, message: 'yo', isMine: true },
    { id: 4, message: 'jjhfhjbhddjfhjdh', isMine: false },
    { id: 5, message: 'jskfdjfjklsnfjlksdnfsnjdnfjksndj', isMine: true }
  ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: action.newMessageBody,
        isMine: false
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };      
    default:
      return state;
  }

}
type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody: string): addMessageActionCreatorType => {
  return {
    type: ADD_MESSAGE, newMessageBody
  }
}

export default dialogsReducer;