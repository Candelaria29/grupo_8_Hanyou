import logo from "../img/logo4.png";

function SingleProduct(props) {
  return (
    <article id="product">
      <picture id="listImg">
        <img src={props.image}></img>
      </picture>
      <div id="listInfo">
        <p id="productTitle">{props.name}</p>
        <p id="productPrice">${props.price}</p>
      </div>
    </article>
  );
}

export default SingleProduct;
