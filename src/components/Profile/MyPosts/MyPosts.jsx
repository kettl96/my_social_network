import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea name="" id="" cols="50" rows="5"></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message='hi how are you' like='15'/>
        <Post message='its my  first post' like='11'/>
       <Post/>
      </div>
    </div>

  );
}

export default MyPosts;