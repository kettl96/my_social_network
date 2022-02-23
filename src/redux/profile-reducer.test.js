import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: 'hi how are you', likesCount: 12 },
    { id: 2, message: 'its my  first post', likesCount: 11 },
    { id: 3, message: 'its my  first post', likesCount: 11 },
  ]
};

it('length of posts should be incremented', () => {
  // 1.test data
  let action = addPostActionCreator('it-v-it');
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4);
})

it('after deleting length of posts should be decremented', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2);
})

it('after deleting length should be decrement if id is incorrect', () => {
  let action = deletePost(10);
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3);
})