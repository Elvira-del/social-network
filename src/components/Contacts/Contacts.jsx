import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import style from "./Contacts.module.scss";

const Contacts = (props) => {
  console.log(style);
  return (
    <div className="contacts">
      <ul className={style.contacts__list}>
        {props.contacts.map((item, idx) => (
          <ContactItem
            key={idx}
            style={style}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
