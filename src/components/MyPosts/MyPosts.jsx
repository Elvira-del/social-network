import React, { useState } from "react";
import { Post } from "../Post/Post";
import avatar from "../../assets/images/avatar.jpg";
import styles from "./Posts.module.scss";
import { Form } from "../Form/Form";

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
    <section className={`section ${styles.posts}`}>
      <div className={styles.wrap}>
        <h2 className="subtitle">My posts</h2>

        <Form
          formClass={`${styles.form} form`}
          inputClass={styles.input}
          value={textPost}
          handleChange={handleChange}
          btnClass={`btn ${styles.btn}`}
          handleClick={addNewPost}
        />

        {isPost &&
          posts.map((item, idx) => (
            <Post
              key={idx}
              styles={styles}
              avatar={avatar}
              content={item.post}
            />
          ))}
      </div>
    </section>
  );
};

export { MyPosts };
