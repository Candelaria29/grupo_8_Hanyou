import LinksNav from "./linksNav";
import { useLocation } from "react-router-dom";

function Navbar() {
  const URL = useLocation();
  return (
    <nav id="navbar">
      <LinksNav path="/" title="Home" />
      <LinksNav path="/products" title="Products" />
      <LinksNav path="/news" title="News" />
    </nav>
  );
}

export default Navbar;
