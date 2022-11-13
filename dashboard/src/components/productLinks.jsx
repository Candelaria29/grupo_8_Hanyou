function ProductLinks(props) {
  return (
    <li>
      <section class="productItem">
        <p>{props.name}</p>
        <a
          href={"http://localhost:8000/productos/detalle/" + props.sku}
          target="_blank"
        >
          <i class="fa-solid fa-circle-info"></i>
        </a>
      </section>
    </li>
  );
}

export default ProductLinks;
