
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
        { id: 1, name: 'Dimych', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
        { id: 2, name: 'andeys', img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' },
        { id: 3, name: 'sasha' , img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
        { id: 4, name: 'hover' , img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
        { id: 5, name: 'hren' , img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'},
      ],
  
      messages: [
        { id: 1, message: 'hi', isMine: true},
        { id: 2, message: 'how is you day', isMine: false },
        { id: 3, message: 'yo', isMine: true},
        { id: 4, message: 'jjhfhjbhddjfhjdh', isMine: false },
        { id: 5, message: 'jskfdjfjklsnfjlksdnfsnjdnfjksndj', isMine: true }
      ],
    },
  friendsPage: [
    {id: 1, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4'},
    {id: 2, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4'},
    {id: 3, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4'},
    {id: 4, name: 'Genadzi', img: 'https://avatars.githubusercontent.com/u/74081058?v=4'},
  ]
  
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state');
  },
  
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
      
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  }
}


export default store;

window.store = store;