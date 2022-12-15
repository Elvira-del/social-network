import React from "react";
import styles from "./Messages.module.scss";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <div className={styles.content}>
        {props.messages.map((item, idx) => (
          <p className="text" key={idx}>
            {item.stringShort}
          </p>
        ))}
      </div>

      <form className={styles.form} action="#" method="post">
        <textarea
          className={styles.input}
          cols="30"
          rows="5"
          autoCorrect="on"
        />
        <button className={`btn ${styles.btn}`}>Send</button>
      </form>
    </div>
  );
};

export { Messages };
