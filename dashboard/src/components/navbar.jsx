import LinksNav from "./linksNav";

function Navbar() {
  return (
    <nav id="navbar">
      <LinksNav path="/" title="Home" />
      <LinksNav path="/products" title="Products" />
      <LinksNav path="/news" title="News" />
    </nav>
  );
}

export default Navbar;
