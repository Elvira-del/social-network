import React from "react";
import style from "./User.module.scss";

const UserInfo = (props) => {
  return (
    <section className={`section ${style.info}`}>
      <div className={style.info__wrap}>
        <img
          className={style.info__avatar}
          src={props.avatar}
          alt="User avatar"
        />

        <div className={style.info__content}>
          <h1 className={style.info__title}>{props.name}</h1>
          <ul className={style.info__list}>
            <li className={style.info__item}>Date of Birth: {props.date}</li>
            <li className={style.info__item}>City: {props.city}</li>
            <li className={style.info__item}>Education: {props.education}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
