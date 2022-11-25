import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <p className="post__text">{props.content}</p>
    </div>
  );
};

export default Post;
