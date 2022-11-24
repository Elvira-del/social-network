import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.date}</li>
        <li>{props.city}</li>
        <li>{props.education}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
