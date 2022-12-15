import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.copy}>© 2022</span>
      </div>
    </footer>
  );
};

export { Footer };
