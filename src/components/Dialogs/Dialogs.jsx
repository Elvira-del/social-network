import React, { useState, useEffect } from "react";
import { Contacts } from "../Contacts/Contacts";
import { Messages } from "../Messages/Messages";
import style from "./Dialogs.module.scss";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://636af450b10125b78fe83042.mockapi.io/dialogs")
      .then((res) => res.json())
      .then((json) => {
        setDialogs(json);
      })
      .catch((error) => {
        console.warn(error);
        alert("Произошла ошибка при загрузке данных.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      <section className={`section ${style.dialogs}`}>
        <h2 className="subtitle">Dialogs</h2>

        <div className={style.dialogs__wrap}>
          <Contacts contacts={dialogs} loading={isLoading} />
          <Messages messages={dialogs} />
        </div>
      </section>
    </div>
  );
};

export { Dialogs };
