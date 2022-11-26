import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <img className="post__avatar" src={props.avatar} alt="" />
      <p className="post__text">{props.content}</p>
    </div>
  );
};

export default Post;
