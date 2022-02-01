import { React } from 'react';
import styles from './users.module.css';


let Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: false, fullName: 'dmitry', status: 'im  bosses ***', location: { city: 'minsk', country: 'belarus' }, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' },
      { id: 2, followed: true, fullName: 'sasha', status: 'im  bosses ***', location: { city: 'moscow', country: 'belarus' }, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' },
      { id: 3, followed: false, fullName: 'dmitry', status: 'im  bosses ***', location: { city: 'minsk', country: 'belarus' }, photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' },
    ])
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={styles.userPhoto} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;