import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status] )

  const activatedEditMode = () => {
    setEditMode(true);
  }
  const deactivatedEditMode = () => {
    setEditMode(false);
    ;
    props.updateStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
        <div className={s.status_bar}>
          <span
            onClick={activatedEditMode}
          >-{props.status}-</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus
            onBlur={deactivatedEditMode} type="text"
            value={status} />
        </div>
      }
    </div>
  );
}


export default ProfileStatusWithHooks;