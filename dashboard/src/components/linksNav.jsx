import { Link } from "react-router-dom";

function LinksNav(props) {
  return (
    <Link to={props.path} class="headerLinks">
      <i class="fa-solid fa-house-chimney"></i> {props.title}
    </Link>
  );
}

export default LinksNav;
