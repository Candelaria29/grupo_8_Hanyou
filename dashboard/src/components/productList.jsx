import "../css/productList.css";
import SingleProduct from "./singleProduct";
import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const API = "http://localhost:8000/api/products";
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Productos);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <main id="listMain">
      <h1 id="listTitle">Todos los productos</h1>
      <section id="list">
        {products.map((product) => (
          <SingleProduct
            name={product.name}
            image={`http://localhost:8000${product.image}`}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}

export default ProductList;
