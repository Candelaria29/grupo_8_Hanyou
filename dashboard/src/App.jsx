import "./App.css";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import New from "./components/new";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Sidebar />
            <Main />
          </div>
        }
      />
      <Route
        path="/products"
        element={
          <div className="App">
            <Sidebar />
            <ProductList />
          </div>
        }
      />
      <Route
        path="/news"
        element={
          <div className="App">
            <Sidebar />
            <New />
          </div>
        }
      />
      <Route
        path="/product/:id"
        element={
          <div className="App">
            <Sidebar />
            <ProductDetail />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
