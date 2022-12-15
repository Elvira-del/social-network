import { Link } from "react-router-dom";

const ContactItem = (props) => {
  return (
    <li className={props.styles.item}>
      <img
        className={props.styles.icon}
        src={props.avatar}
        alt="Friend avatar"
      />
      <Link className={props.styles.link} to={`/dialogs/${props.id}`}>
        {props.name}
      </Link>
    </li>
  );
};

export { ContactItem };
