import React from "react";

const Post = (props) => {
  return (
    <div className={props.styles.post}>
      <img className={props.styles.avatar} src={props.avatar} alt="" />
      <p className={props.styles.text}>{props.content}</p>
    </div>
  );
};

export { Post };
