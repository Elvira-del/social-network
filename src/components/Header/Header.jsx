import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrap}`}>
        <img className={styles.logo} src={logo} width="50" height="50" alt="" />
      </div>
    </header>
  );
};

export { Header };
