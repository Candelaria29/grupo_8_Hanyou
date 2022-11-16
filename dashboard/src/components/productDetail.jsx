import detailStyle from "../css/productDetail.module.css";
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
    <main className= {detailStyle.detailMain}>
      <h1 className= {detailStyle.detailTitle}>Detalle de producto</h1>
      <section className= {detailStyle.detailCard}>
        <h3 className= {detailStyle.name}>{product.name}</h3>
        <picture className= {detailStyle.detailImg}>
          <img src={`http://localhost:8000${product.image}`}></img>
        </picture>
        <ul className= {detailStyle.info}>
          <li className= {detailStyle.color}>
            <b>Color: </b>{product.color === "painted" ? "Painted" : "Not painted"}
          </li>
          <li><b>Tamaño: </b>{product.size === 2 ? "Big" : "Small"}</li>
          <li className= {detailStyle.price}>${product.price}</li>
          <li><b>Descripción: </b>{product.description}</li>
        </ul>
      </section>
    </main>
  );
}

export default ProductDetail;
