import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post.jsx';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'hi how are you', likesCount: 12},
    {id: 2, message: 'its my  first post', likesCount: 11},
    {id: 3, message: 'its my  first post', likesCount: 11},
  ]

  let postsElements=
  posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

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