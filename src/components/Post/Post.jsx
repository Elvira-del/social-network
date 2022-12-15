import React from "react";

const Post = ({ classes, avatar, content }) => {
  return (
    <div className={classes.post}>
      <img className={classes.avatar} src={avatar} alt="" />
      <p className={classes.text}>{content}</p>
    </div>
  );
};

export { Post };
