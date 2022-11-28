import React from "react";

const UserInfo = (props) => {
  return (
    <section className="section info">
      <div className="info__wrap">
        <img className="info__avatar" src={props.avatar} alt="User avatar" />

        <div className="info__content">
          <h1 className="info__title">{props.name}</h1>
          <ul className="info__list">
            <li className="info__item">Date of Birth: {props.date}</li>
            <li className="info__item">City: {props.city}</li>
            <li className="info__item">Education: {props.education}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
