import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/state';


const MyPosts = (props) => {

  let postsElements =
    props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;

    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
            ref={newPostElement} value={props.newPostText}
            name="" id="" cols="50" rows="5" />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
}

export default MyPosts;