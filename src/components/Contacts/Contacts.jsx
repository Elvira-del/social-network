import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const Contacts = (props) => {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        {props.contacts.map((item, idx) => (
          <ContactItem
            key={idx}
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
