import React, { useState } from "react";
import { Post } from "../Post/Post";
import avatar from "../../assets/images/avatar.jpg";
import style from "./Posts.module.scss";

const MyPosts = () => {
  const [textPost, setTextPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [isPost, setIsPost] = useState(false);

  const handleChange = (e) => {
    setTextPost(e.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { post: textPost }]);
    setIsPost(true);
    setTextPost("");
  };

  return (
    <section className={`section ${style.posts}`}>
      <div className={style.posts__wrap}>
        <h2 className="subtitle">My posts</h2>

        <form className={`${style.posts__form} form`} action="#" method="post">
          <textarea
            className={style.form__input}
            value={textPost}
            onChange={handleChange}
            cols="30"
            rows="5"
            placeholder="Your text..."
            autoCorrect="on"
          />
          <button
            className={`btn ${style.form__btn}`}
            onClick={addNewPost}
            type="submit"
          >
            Send
          </button>
        </form>

        {isPost &&
          posts.map((item, idx) => (
            <Post key={idx} style={style} avatar={avatar} content={item.post} />
          ))}
      </div>
    </section>
  );
};

export { MyPosts };
