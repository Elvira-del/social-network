import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <Link to="/dialogs/1">Curtis Peterson</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/2">Henry Wells</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/3">Linda Peters</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/4">Robert Watts</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/5">Victoria Ray</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/6">Charlie Adams</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/7">Samuel Gibbs</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/8">Amanda Jensen</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/9">Janice Lindsey</Link>
        </li>
        <li className="contacts__item">
          <Link to="/dialogs/10">Joseph Houston</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
