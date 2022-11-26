import React from "react";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <section className="section posts">
      <div className="container posts__wrap">
        <h2 className="subtitle">My posts</h2>
        <form className="posts__form form" action="#" method="post">
          <textarea
            className="form__input"
            cols="30"
            rows="5"
            placeholder="Your text..."
            autoCorrect="on"
          ></textarea>
          <button className="btn form__btn" type="submit">
            Send
          </button>
        </form>
        <Post content="Hi! What do you think?" />
        <Post content="My first post" />
      </div>
    </section>
  );
};

export default MyPosts;
