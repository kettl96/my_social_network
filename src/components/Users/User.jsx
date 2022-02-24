import React from "react";
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';


let ava = 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg';

let User = ({ user, followingInProgress, unfollow, follow  }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : ava} className={styles.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}>Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>
  )
}

export default User;