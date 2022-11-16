import LinksNav from "./linksNav";
import { useLocation } from "react-router-dom";
import sidebarStyle from "../css/sidebar.module.css";

function Navbar() {
  const URL = useLocation();
  return (
    <nav className={sidebarStyle.navbar}>
      <a href='http://localhost:8000/' target="_blank" className= {sidebarStyle.headerLinks}> Ir a Hanyou </a>
      {URL.pathname !== "/" ? <LinksNav path="/" title="Home" /> : ""}
      {URL.pathname !== "/products" ? (
        <LinksNav path="/products" title="Productos" />
      ) : (
        ""
      )}
      {URL.pathname !== "/news" ? <LinksNav path="/news" title="New" /> : ""}
    </nav>
  );
}

export default Navbar;
