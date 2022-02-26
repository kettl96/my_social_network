import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
let ava = 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg';


const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(()=> {
      setEditMode(false);
    });
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

        {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData profile={props.profile} 
          isOwner={props.isOwner} goToEditMode={()=> {setEditMode(true)}}
          />}
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Full name:</b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills:</b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>
    <div className={s.contacts}>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key}
          contactTitle={key}
          contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}



const Contact = ({ contactTitle, contactValue }) => {
  return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;