import { Link } from "react-router-dom";

function LinksNav(props) {
  return (
    <Link to={props.path} class="headerLinks">
      {props.title}
    </Link>
  );
}

export default LinksNav;
