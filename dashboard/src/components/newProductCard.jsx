import logo from "../img/logo4.png";
import { useState, useEffect } from "react";

function NewProductCard() {
  const [product, setProduct] = useState([]);
  const API = "http://localhost:8000/api/products";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const lastProduct = data.Productos.length - 1;
        setProduct(data.Productos[lastProduct]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <article id="newCard">
      <p id="newTitle"> Ultimo producto </p>
      <picture id="newImg">
        <img src={`http://localhost:8000${product.image}`}></img>
      </picture>
      <div id="info">
        <p id="name">{product.name}</p>
        <p id="price">{product.price}</p>
        <p id="description">{product.description}</p>
      </div>
    </article>
  );
}

export default NewProductCard;
