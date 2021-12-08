import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>      
      <MyPosts posts= {props.state.posts} 
               newPostText={props.state.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  );
}

export default Profile;