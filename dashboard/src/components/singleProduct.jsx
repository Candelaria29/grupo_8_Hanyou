import listStyle from "../css/productList.module.css";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  return (
    <Link to={`/product/${props.sku}`} className= {listStyle.product}>
      <picture className= {listStyle.listImg}>
        <img src={props.image}></img>
      </picture>
      <div className= {listStyle.listInfo}>
        <p className= {listStyle.productTitle}>{props.name}</p>
        <p className= {listStyle.productPrice}>${props.price}</p>
      </div>
    </Link>
  );
}

export default SingleProduct;
