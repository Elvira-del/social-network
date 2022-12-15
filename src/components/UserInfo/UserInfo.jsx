import React from "react";
import styles from "./User.module.scss";

const UserInfo = (props) => {
  return (
    <section className={`section ${styles.info}`}>
      <div className={styles.wrap}>
        <img className={styles.avatar} src={props.avatar} alt="User avatar" />

        <div className={styles.content}>
          <h1 className={styles.title}>{props.name}</h1>
          <ul className={styles.list}>
            <li className={styles.item}>Date of Birth: {props.date}</li>
            <li className={styles.item}>City: {props.city}</li>
            <li className={styles.item}>Education: {props.education}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { UserInfo };
