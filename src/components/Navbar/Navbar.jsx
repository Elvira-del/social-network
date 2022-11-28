import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/profile">
              Profile
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink className="nav__link" to="/dialogs">
              Messages
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink className="nav__link" to="/news">
              News
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink className="nav__link" to="/music">
              Music
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink className="nav__link" to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
