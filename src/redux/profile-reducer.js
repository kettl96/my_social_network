let initialState = {
  posts: [
    { id: 1, message: 'hi how are you', likesCount: 12 },
    { id: 2, message: 'its my  first post', likesCount: 11 },
    { id: 3, message: 'its my  first post', likesCount: 11 },
  ],
  newPostText: 'kamasutra',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD-POST': {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case 'UPDATE-NEW-POST-TEXT': {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
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

export default profileReducer;