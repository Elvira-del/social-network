import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrap">
        <img className="logo" src={logo} width="50" height="50" alt="" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
