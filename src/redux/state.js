
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi how are you', likesCount: 12 },
        { id: 2, message: 'its my  first post', likesCount: 11 },
        { id: 3, message: 'its my  first post', likesCount: 11 },
      ],
      newPostText: 'kamasutra',
    },
    dialogsPage: {
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
    },
    friendsPage: [
      { id: 1, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4' },
      { id: 2, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4' },
      { id: 3, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4' },
      { id: 4, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4' },
    ]

  },
  _callSubscriber() {
    console.log('state');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);


    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);


    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);

    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT', newText: text }
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}
export const updateNewMessageTextActionCreator = (newText) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
  }
}

export default store;

window.store = store;











  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0

  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this.rerenderEntireTree(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this.rerenderEntireTree(this._state);
  // },