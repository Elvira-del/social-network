import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <aside className={style.navbar}>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__item}>
            <NavLink className={style.nav__link} to="/profile">
              Profile
            </NavLink>
          </li>

          <li className={style.nav__item}>
            <NavLink className={style.nav__link} to="/dialogs">
              Messages
            </NavLink>
          </li>

          <li className={style.nav__item}>
            <NavLink className={style.nav__link} to="/news">
              News
            </NavLink>
          </li>

          <li className={style.nav__item}>
            <NavLink className={style.nav__link} to="/music">
              Music
            </NavLink>
          </li>

          <li className={style.nav__item}>
            <NavLink className={style.nav__link} to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
