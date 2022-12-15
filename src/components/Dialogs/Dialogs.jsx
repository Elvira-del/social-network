import React, { useState, useEffect } from "react";
import { Contacts } from "../Contacts/Contacts";
import { Messages } from "../Messages/Messages";
import styles from "./Dialogs.module.scss";

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
      <section className={`section ${styles.dialogs}`}>
        <h2 className="subtitle">Dialogs</h2>

        <div className={styles.wrap}>
          <Contacts contacts={dialogs} loading={isLoading} />
          <Messages />
        </div>
      </section>
    </div>
  );
};

export { Dialogs };
