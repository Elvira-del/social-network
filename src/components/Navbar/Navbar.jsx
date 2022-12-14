import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/profile">
              Profile
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink className={styles.link} to="/dialogs">
              Messages
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink className={styles.link} to="/news">
              News
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink className={styles.link} to="/music">
              Music
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink className={styles.link} to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Navbar };
