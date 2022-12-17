import React, { useState } from "react";
import { Form } from "../../Form/Form";
import styles from "./Messages.module.scss";

const Messages = () => {
  const [textMessage, setTextMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const observeChangeMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: textMessage }]);
    setTextMessage("");
  };

  return (
    <div className={styles.messages}>
      <div className={styles.content}>
        {messages.map((item, idx) => (
          <p className={styles.text} key={idx}>
            {item.message}
          </p>
        ))}
      </div>

      <Form
        formClass={styles.form}
        inputClass={styles.input}
        value={textMessage}
        handleChange={observeChangeMessage}
        btnClass={`btn ${styles.btn}`}
        handleClick={addMessage}
      />
    </div>
  );
};

export { Messages };
