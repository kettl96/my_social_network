import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileHeader}>
        <div >
          <img className={s.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
         
        </div>
        <div className={s.profile}>
            ava
          </div>
      </div>
    </div>
  );
}

export default ProfileInfo;