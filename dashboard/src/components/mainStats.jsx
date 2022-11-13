import MainCard from "./mainCard.jsx";
import { useState, useEffect } from "react";

function MainStats() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const API = "http://localhost:8000/api/";
  const usersPath = "users";
  const productsPath = "products";

  useEffect(() => {
    fetch(API + usersPath)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.Usuarios);
      })
      .catch((e) => console.log(e));

    fetch(API + productsPath)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Productos);
        setCategories(data.ProductosPorCategoria);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section id="mainStats">
      <MainCard title="Total de productos" quantity={products.length} />
      <MainCard title="Total de usuarios" quantity={users.length} />
      <MainCard
        title="Total de categorias"
        quantity={Object.keys(categories).length}
      />
    </section>
  );
}

export default MainStats;
