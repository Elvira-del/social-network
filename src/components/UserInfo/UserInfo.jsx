import React from "react";

const UserInfo = (props) => {
  return (
    <section className="info">
      <div className="container">
        <h1 className="title">{props.name}</h1>
        <ul className="info__list">
          <li className="info__item">Date of Birth: {props.date}</li>
          <li className="info__item">City: {props.city}</li>
          <li className="info__item">Education: {props.education}</li>
        </ul>
      </div>
    </section>
  );
};

export default UserInfo;
