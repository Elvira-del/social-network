import React, { useState } from "react";
import { Post } from "./Post/Post";
import avatar from "../../assets/images/avatar.jpg";
import styles from "./Posts.module.scss";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const MyPosts = () => {
  const [contentPost, setContentPost] = useState("");

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onContentPostChange = (e) => {
    setContentPost(e.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();
    if (contentPost) {
      dispatch(
        createPost({
          id: nanoid(),
          contentPost,
        })
      );

      setContentPost("");
    }
  };

  return (
    <section className={`section ${styles.posts}`}>
      <div className={styles.wrap}>
        <h2 className="subtitle">My posts</h2>

        <Form
          formClass={`${styles.form} form`}
          inputClass={styles.input}
          value={contentPost}
          handleChange={onContentPostChange}
          btnClass={`btn ${styles.btn}`}
          handleClick={addNewPost}
        />

        {posts.map((post, idx) => (
          <Post
            key={idx}
            classes={styles}
            avatar={avatar}
            content={post.contentPost}
          />
        ))}
      </div>
    </section>
  );
};

export { MyPosts };
