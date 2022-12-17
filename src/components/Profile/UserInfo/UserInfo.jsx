import React from "react";
import styles from "./User.module.scss";

const UserInfo = ({ avatar, name, date, city, education }) => {
  return (
    <section className={`section ${styles.info}`}>
      <div className={styles.wrap}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />

        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <ul className={styles.list}>
            <li className={styles.item}>Date of Birth: {date}</li>
            <li className={styles.item}>City: {city}</li>
            <li className={styles.item}>Education: {education}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { UserInfo };
