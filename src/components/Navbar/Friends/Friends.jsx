import React from 'react';
import s from "./Friends.module.css"

let FriendsItem = (props) => {
return (
  <div className={s.friendsWrraper}><img src={props.img}/>
  <div className={s.name}>{props.name}</div>
  </div>
)
}


const Friends = (props) => {
  let friendsElement = props.friends.map
  (friend => <FriendsItem name={friend.name} id={friend.id} img={friend.img}/>);
  return (
    <div className={s.container}>
      <div>Friends</div>
      <div className={s.img}>{friendsElement}</div>
    </div>
  )
}


export default Friends;