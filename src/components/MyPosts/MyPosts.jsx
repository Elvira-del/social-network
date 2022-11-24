import React from "react";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <form action="#" method="post">
        <textarea
          cols="30"
          rows="10"
          placeholder="Your text..."
          autoCorrect="on"
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <Post content="Hi! What do you think?" />
      <Post content="My first post" />
    </div>
  );
};

export default MyPosts;
