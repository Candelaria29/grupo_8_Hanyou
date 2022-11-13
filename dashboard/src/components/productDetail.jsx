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
      <p>Detalle de producto</p>
      <p>{id}</p>
      <p>{product.color}</p>
    </div>
  );
}

export default ProductDetail;
