import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ContactItem from "../ContactItem/ContactItem";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      method: "GET",
      headers: { "app-id": "638754260803155fa32416a8" },
    })
      .then((res) => res.json())
      .then((json) => {
        setContacts(json.data);
      })
      .catch((error) => {
        console.warn(error);
        alert("Произошла ошибка при загрузке данных.");
      });
  }, []);

  return (
    <div className="contacts">
      <ul className="contacts__list">
        {contacts.map((item, idx) => (
          <ContactItem
            key={idx}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
