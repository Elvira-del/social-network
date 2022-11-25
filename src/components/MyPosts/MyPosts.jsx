import React from "react";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <section className="posts">
      <h2 className="subtitle">My posts</h2>
      <form className="posts__form" action="#" method="post">
        <textarea
          className="posts__input"
          cols="30"
          rows="10"
          placeholder="Your text..."
          autoCorrect="on"
        ></textarea>
        <button className="posts__btn" type="submit">
          Send
        </button>
      </form>
      <Post content="Hi! What do you think?" />
      <Post content="My first post" />
    </section>
  );
};

export default MyPosts;
