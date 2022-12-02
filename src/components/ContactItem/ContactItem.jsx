import { Link } from "react-router-dom";

const ContactItem = (props) => {
  return (
    <li className="contacts__item">
      <img className="contacts__icon" src={props.avatar} alt="Friend avatar" />
      <Link className="contacts__link" to={`/dialogs/${props.id}`}>
        {props.name}
      </Link>
    </li>
  );
};

export default ContactItem;