import React from "react";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="/">
              Профиль
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              Сообщения
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              Новости
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              Музыка
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              Настройки
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
