import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="card bg-dark text-white" style={{ width: "18rem" }}>
      {product?.length !== 1 ? (
        <div>
          <h2>{product?.nombre}</h2>
          <img src={product?.img} className="card-img-top" alt="Imagen" />
          <div className="card bg-dark text-white">
            <h3>Tamaño: {product?.tamaño}</h3>
            <p>Precio: $ {product?.precio}</p>
            <p>{product?.desc}</p>
            <ItemCount stock={product?.stock} Initial={1} />
            <div className="card-text"></div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default ItemDetail;
