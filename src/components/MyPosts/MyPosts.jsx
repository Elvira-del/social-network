import React, { useState, useRef } from "react";
import Post from "../Post/Post";
import avatar from "../../assets/images/avatar.jpg";

const MyPosts = () => {
  const [textPost, setTextPost] = useState("");
  const newPostContainer = useRef(null);

  const addNewPost = (e) => {
    e.preventDefault();
    setTextPost(newPostContainer.current.value);
  };

  return (
    <section className="section posts">
      <div className="posts__wrap">
        <h2 className="subtitle">My posts</h2>

        <form className="posts__form form" action="#" method="post">
          <textarea
            className="form__input"
            ref={newPostContainer}
            cols="30"
            rows="5"
            placeholder="Your text..."
            autoCorrect="on"
          ></textarea>
          <button className="btn form__btn" type="submit" onClick={addNewPost}>
            Send
          </button>
        </form>

        {textPost !== "" && <Post avatar={avatar} content={textPost} />}
      </div>
    </section>
  );
};

export default MyPosts;
