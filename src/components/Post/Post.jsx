import React from "react";

const Post = (props) => {
  return (
    <div className={props.style.post}>
      <img className={props.style.post__avatar} src={props.avatar} alt="" />
      <p className={props.style.post__text}>{props.content}</p>
    </div>
  );
};

export { Post };
