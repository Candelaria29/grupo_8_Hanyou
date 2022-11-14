import LinksNav from "./linksNav";
import { useLocation } from "react-router-dom";

function Navbar() {
  const URL = useLocation();
  return (
    <nav id="navbar">
      {URL.pathname !== "/" ? <LinksNav path="/" title="Home" /> : ""}
      {URL.pathname !== "/products" ? (
        <LinksNav path="/products" title="Products" />
      ) : (
        ""
      )}
      {URL.pathname !== "/news" ? <LinksNav path="/news" title="New" /> : ""}
    </nav>
  );
}

export default Navbar;
