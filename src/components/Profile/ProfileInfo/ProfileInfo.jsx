import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css"
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
      <div className={s.profileHeader}>
        <div >
          <img className={s.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
         
        </div>
        <div className={s.profile}>
          <ProfileStatus status={'hello'}/>
            <img src={props.profile.photos.large} />
          </div>
      </div>
    </div>
  );
}

export default ProfileInfo;