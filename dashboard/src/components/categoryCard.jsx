import ProductLinks from "./productLinks.jsx";
import { useState, useEffect } from "react";

function CategoryCard(props) {
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
    <article className="categoryCard">
      <div>
        <div class="catTitle">
          {props.identifier === "ProductosPequenos" ? (
            <p>Productos pequeños</p>
          ) : (
            <p>Productos grandes</p>
          )}
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <ul id="categoryList">
          {/* aca hay que hacer que cada link llegue al detalle del producto correspondiente */}
          {products.map((product) =>
            product.size === 1 && props.identifier === "ProductosPequenos" ? (
              <ProductLinks sku={product.sku} name={product.name} />
            ) : product.size === 2 &&
              props.identifier === "ProductosGrandes" ? (
              <ProductLinks sku={product.sku} name={product.name} />
            ) : null
          )}
        </ul>
      </div>
    </article>
  );
}

export default CategoryCard;
