import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
let ava = 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  return (
    <div>
      <div className={s.profileHeader}>
        <div >
          <img className={s.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />

        </div>
        <div className={s.profile}>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          <img src={props.profile.photos.large || ava} />
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;