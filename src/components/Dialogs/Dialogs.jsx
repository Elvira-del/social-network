import React from "react";
import Contacts from "../Contacts/Contacts";

const Dialogs = () => {
  return (
    <div className="container">
      <section className="section dialogs">
        <h2 className="subtitle">Dialogs</h2>

        <Contacts />
      </section>
    </div>
  );
};

export default Dialogs;
