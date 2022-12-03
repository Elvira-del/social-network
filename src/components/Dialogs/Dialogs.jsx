import React, { useState, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Messages from "../Messages/Messages";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState([]);

  useEffect(() => {
    fetch("https://636af450b10125b78fe83042.mockapi.io/dialogs")
      .then((res) => res.json())
      .then((json) => {
        setDialogs(json);
      })
      .catch((error) => {
        console.warn(error);
        alert("Произошла ошибка при загрузке данных.");
      });
  }, []);

  return (
    <div className="container">
      <section className="section dialogs">
        <h2 className="subtitle">Dialogs</h2>

        <div className="dialogs__wrap">
          <Contacts contacts={dialogs} />
          <Messages messages={dialogs} />
        </div>
      </section>
    </div>
  );
};

export default Dialogs;
