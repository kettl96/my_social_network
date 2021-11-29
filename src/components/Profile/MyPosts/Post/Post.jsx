import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src="https://thomas-philippot.dev/img/avatar.svg" alt="" />
      {props.message}
      <div>
        <span>
          <img className={s.imglike} src="https://image.pngaaa.com/950/1517950-small.png" alt="" /> Like {props.like} </span>
      </div>
    </div>
  );
}

export default Post;