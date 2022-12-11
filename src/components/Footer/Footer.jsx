import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <span className={style.footer__copy}>© 2022</span>
      </div>
    </footer>
  );
};

export { Footer };
