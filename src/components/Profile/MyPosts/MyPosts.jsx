import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post.jsx';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';


const MyPosts = (props) => {
  let postsElements =
    props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }  
  return (
    <div>
      <h3>My posts</h3>
     <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText'
          placeholder='Write your post' />
      </div>
      <div><button>Add Post</button></div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;