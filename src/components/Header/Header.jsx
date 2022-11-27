import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrap">
        <img className="logo" src={logo} width="50" height="50" alt="" />
      </div>
    </header>
  );
};

export default Header;
