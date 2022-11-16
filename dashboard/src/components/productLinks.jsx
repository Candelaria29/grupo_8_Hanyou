import mainStyle from '../css/main.module.css';

function ProductLinks(props) {
  return (
    <li>
      <section className= {mainStyle.productItem}>
        <p>{props.name}</p>
        <a
          href={"http://localhost:8000/productos/detalle/" + props.sku}
          target="_blank"
        >
          <i className="fa-solid fa-circle-info"></i>
        </a>
      </section>
    </li>
  );
}

export default ProductLinks;
