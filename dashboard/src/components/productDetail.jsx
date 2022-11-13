import "../css/productDetail.css";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  let { id } = useParams();
  return (
    <div id="detailMain">
      <p>Detalle de producto</p>
      <p>{id}</p>
    </div>
  );
}

export default ProductDetail;
