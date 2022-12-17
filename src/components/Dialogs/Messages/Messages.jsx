import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../Form/Form";
import { createMessage } from "../messagesSlice";
import styles from "./Messages.module.scss";

const Messages = () => {
  const [textMessage, setTextMessage] = useState("");

  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const onChangeMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    if (textMessage) {
      dispatch(
        createMessage({
          id: nanoid(),
          textMessage,
        })
      );

      setTextMessage("");
    }
  };

  return (
    <div className={styles.messages}>
      <div className={styles.content}>
        {messages.map((message, idx) => (
          <p className={styles.text} key={idx}>
            {message.textMessage}
          </p>
        ))}
      </div>

      <Form
        formClass={styles.form}
        inputClass={styles.input}
        value={textMessage}
        handleChange={onChangeMessage}
        btnClass={`btn ${styles.btn}`}
        handleClick={addMessage}
      />
    </div>
  );
};

export { Messages };
