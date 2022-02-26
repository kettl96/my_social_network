import React from 'react';
import s from "./ProfileInfo.module.css"
import { createField, Input, Textarea } from './../../common/FormControls/FormsControls';
import { reduxForm } from 'redux-form';
import styles from "../../common/FormControls/FormsControls.module.css"


const ProfileDataForm = ({handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    <div><button>Save</button></div>
    { error && <div className={styles.formSummaryError}>
          {error}
        </div>
      }
    <div>
      <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
    </div>
    <div>
      <b>My professional skills:</b>
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
    </div>

    <div>
      <b>About me:</b> {createField('About me', 'aboutMe', [], Textarea)}
    </div>
    <div className={s.contacts}>
    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
      return <div key={key}>
        {key}: {createField(key, 'contacts.' + key, [], Input)}
      </div>
      
      
      // <Contact key={key}
      //   contactTitle={key}
      //   contactValue={profile.contacts[key]} />
    })}
  </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm