import { Link } from "react-router-dom";

const ContactItem = (props) => {
  return (
    <li className={props.style.contacts__item}>
      <img
        className={props.style.contacts__icon}
        src={props.avatar}
        alt="Friend avatar"
      />
      <Link className={props.style.contacts__link} to={`/dialogs/${props.id}`}>
        {props.name}
      </Link>
    </li>
  );
};

export default ContactItem;
