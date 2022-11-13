import logo from "../img/logo4.png";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  return (
    <Link to={`/product/${props.sku}`} id="product">
      <picture id="listImg">
        <img src={props.image}></img>
      </picture>
      <div id="listInfo">
        <p id="productTitle">{props.name}</p>
        <p id="productPrice">${props.price}</p>
      </div>
    </Link>
  );
}

export default SingleProduct;
