import { Link } from "react-router-dom";

const ContactItem = ({ classes, id, name, avatar }) => {
  return (
    <li className={classes.item}>
      <img className={classes.icon} src={avatar} alt="Friend avatar" />
      <Link className={classes.link} to={`/dialogs/${id}`}>
        {name}
      </Link>
    </li>
  );
};

export { ContactItem };
