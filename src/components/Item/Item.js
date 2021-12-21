import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className='row mx-5 row-cols-1 row-cols-md-3 g-4'>
      <div className='col'>
        <div className='card bg-dark text-white' style={{ width: "25rem" }}>
          <div>
            <h2>{product?.nombre}</h2>
            <img
              src={product?.img}
              className='card-img-top'
              alt='Imagen'
              style={{ width: "340px" }}
            />
            <div className='card bg-dark text-white'>
              <h3>Tamaño: {product?.tamaño}</h3>
              <p>Precio: $ {product?.precio}</p>
            </div>
            <Link to={`/detail/${product.id}`} className='btn btn-primary'>
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
