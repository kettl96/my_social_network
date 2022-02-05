import React from "react";
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let ava = 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return <div>
  <div>
    {pages.map(p => {
     return <span className={props.currentPage === p && styles.selectedPage}
     onClick={ (e) => { props.onPageChanged(p) }} >{p}</span>
    })}
  </div>
  {
    props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + u.id}>

          <img src={u.photos.small != null ? u.photos.small : ava} className={styles.userPhoto} />
          </NavLink>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => { 
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': 'cd394e78-77fa-4733-ae4a-43c6efc86300'
                }
              })
              .then(response => {
                if (response.data.resultCode == 0) {
                  props.unfollow(u.id)
                }                
              });              
               }}>Unfollow</button>



            : <button onClick={() => { 
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                withCredentials: true,
                headers: {
                  'API-KEY': 'cd394e78-77fa-4733-ae4a-43c6efc86300'
                }
              })
              .then(response => {
                if (response.data.resultCode == 0) {
                  props.follow(u.id)
                }                
              });
               }}>Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>)
  }
</div>
}

export default Users;