import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      </div>
      <div>
        ava
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;