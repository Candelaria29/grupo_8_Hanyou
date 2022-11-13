import CategoryCard from "./categoryCard.jsx";
import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  const API = "http://localhost:8000/api/products";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.ProductosPorCategoria);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section id="categories">
      {Object.keys(categories).map((category) => (
        <CategoryCard identifier={category} />
      ))}
    </section>
  );
}

export default Categories;
