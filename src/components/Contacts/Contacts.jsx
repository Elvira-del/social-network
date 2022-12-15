import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { Loader } from "../Loader/Loader";
import style from "./Contacts.module.scss";

const Contacts = (props) => {
  return (
    <div className="contacts">
      {props.loading ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export { Contacts };
