import React from "react";
import logo from "../../assets/logo.svg";
import style from "./Header.module.scss";

const Header = () => {
  console.log(style);
  return (
    <header className={style.header}>
      <div className={`container ${style.header__wrap}`}>
        <img
          className={style.header__logo}
          src={logo}
          width="50"
          height="50"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
