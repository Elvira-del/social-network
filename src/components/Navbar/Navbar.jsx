import React from "react";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/dialogs">
              Messages
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/news">
              News
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/music">
              Music
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/settings">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
