import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = (props) => {


  let postsElements=
  props.posts.map( posts => <Post message={posts.message} likesCount={posts.likesCount} /> );

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="50" rows="5"></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>

  );
}

export default MyPosts;