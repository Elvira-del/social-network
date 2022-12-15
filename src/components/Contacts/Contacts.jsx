import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { Loader } from "../Loader/Loader";
import styles from "./Contacts.module.scss";

const Contacts = (props) => {
  return (
    <div className={styles.contacts}>
      {props.loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <ul className={styles.list}>
          {props.contacts.map((item, idx) => (
            <ContactItem
              key={idx}
              styles={styles}
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
