import React, { useState, useEffect } from "react";
import ContactItem from "../ContactItem/ContactItem";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyapi.io/data/v1/user?limit=10", {
  //     method: "GET",
  //     headers: { "app-id": "638754260803155fa32416a8" },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setContacts(json.data);
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //       alert("Произошла ошибка при загрузке данных.");
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://app.fakejson.com/q/a2kbQT6W?token=EPPceshX_h8X0L9YzasBwA", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setContacts(json);
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
          <ContactItem key={idx} id={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
