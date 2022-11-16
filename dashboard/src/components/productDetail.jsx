import "../css/productDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail(props) {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const API = `http://localhost:8000/api/products/${id}`;

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div id="detailMain">
      <article id="detailCard">
        <p id="detailTitle"> Detalle </p>
        <picture id="detailImg">
          <img src={`http://localhost:8000${product.image}`}></img>
        </picture>
        <div id="info">
          <p id="name">{product.name}</p>
          <p id="color">
            {product.color === "painted" ? "Painted" : "Not painted"}
          </p>
          <p id="size">{product.size === 2 ? "Big" : "Small"}</p>
          <p id="price">${product.price}</p>
          <p id="description">{product.description}</p>
        </div>
      </article>
    </div>
  );
}

export default ProductDetail;
