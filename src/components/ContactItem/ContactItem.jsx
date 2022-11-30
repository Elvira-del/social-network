import { Link } from "react-router-dom";

const ContactItem = (props) => {
  return (
    <li className="contacts__item">
      <Link
        to={`/dialogs/${props.id}`}
      >{`${props.firstName} ${props.lastName}`}</Link>
    </li>
  );
};

export default ContactItem;
