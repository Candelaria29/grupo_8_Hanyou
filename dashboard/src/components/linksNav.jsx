import { Link } from "react-router-dom";
import sidebarStyle from "../css/sidebar.module.css";

function LinksNav(props) {
  return (
    <Link to={props.path} className={sidebarStyle.headerLinks}>
      {props.title}
    </Link>
  );
}

export default LinksNav;
