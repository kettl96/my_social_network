let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'hi how are you', likesCount: 12 },
      { id: 2, message: 'its my  first post', likesCount: 11 },
      { id: 3, message: 'its my  first post', likesCount: 11 },
    ],
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

}


export default state;