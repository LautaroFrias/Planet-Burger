import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const addToCart = (count) => {
    console.log(`agregado al carrito ${count}`);
  };

  return (
    <div className="card bg-dark text-white" style={{ width: "18rem" }}>
      {product?.length !== 0 ? (
        <div>
          <h2>{product?.nombre}</h2>
          <img src={product?.img} className="card-img-top" alt="Imagen" />
          <div className="card bg-dark text-white">
            <h3>Tamaño: {product?.tamaño}</h3>
            <p>Precio: $ {product?.precio}</p>
            <p>{product?.desc}</p>
            <p>Categoria: {product?.categoria}</p>
            <ItemCount onAdd={addToCart} stock={product?.stock} />
            <div className="card-text"></div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
