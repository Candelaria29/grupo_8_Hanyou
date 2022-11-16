import newStyle from '../css/new.module.css';
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
    <article className= {newStyle.newCard}>
      <p className= {newStyle.newTitle}> Ultimo producto </p>
      <picture className= {newStyle.newImg}>
        <img src={`http://localhost:8000${product.image}`}></img>
      </picture>
      <div className= {newStyle.info}>
        <p className= {newStyle.name}>{product.name}</p>
        <p className= {newStyle.price}>${product.price}</p>
        <p className= {newStyle.description}>{product.description}</p>
      </div>
    </article>
  );
}

export default NewProductCard;
