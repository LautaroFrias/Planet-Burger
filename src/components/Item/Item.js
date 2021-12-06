import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  return (
    <div className="ContainerProductos">
      <div className="Productos">
        <img src={product.img} alt="hamburguesa" />
        <h3 className="HeaderProductos">{product.nombre}</h3>
        <div className="accordion" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Ver Detalle
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <h4>{product.desc}.</h4>
                <h5>
                  <strong>Tamaño: {product.tamaño}</strong>
                </h5>
              </div>
            </div>
          </div>
          <p className="precioProducto">Precio: $ {product.precio}</p>
          <ItemCount stock={product?.stock} Initial={1} />
          <button type="button" className="btn btn-primary btn-lg">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
