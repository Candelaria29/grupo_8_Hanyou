import sidebarStyle from "../css/sidebar.module.css";
import Navbar from "./navbar.jsx";
import logo from "../img/logo4.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <header>
      <Link to="/" className={sidebarStyle.logo}>
        <img src={logo}></img>
      </Link>
      <Navbar />
      <h4 className={sidebarStyle.author}>By Nico Cilio y Cande Barrios</h4>
    </header>
  );
}

export default Sidebar;
