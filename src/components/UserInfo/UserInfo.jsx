import React from "react";

const UserInfo = (props) => {
  return (
    <section className="info">
      <h1 className="title">{props.name}</h1>
      <ul className="info__list">
        <li className="info__item">{props.date}</li>
        <li className="info__item">{props.city}</li>
        <li className="info__item">{props.education}</li>
      </ul>
    </section>
  );
};

export default UserInfo;
