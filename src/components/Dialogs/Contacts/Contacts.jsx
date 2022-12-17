import React from "react";
import { ContactItem } from "./ContactItem/ContactItem";
import { Loader } from "../../Loader/Loader";
import styles from "./Contacts.module.scss";

const Contacts = ({ contacts, loading }) => {
  return (
    <div className={styles.contacts}>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <ul className={styles.list}>
          {contacts.map((item, idx) => (
            <ContactItem
              key={idx}
              classes={styles}
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
