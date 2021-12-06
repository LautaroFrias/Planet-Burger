import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div classname="card" style={{ width: "18rem" }}>
      {product?.length !== 1 ? (
        <div>
          <h2>{product?.nombre}</h2>
          <img src={product?.img} classname="card-img-top" alt="Imagen" />
          <div classname="card-body">
            <h3>Tamaño: {product?.tamaño}</h3>
            <p>Precio: $ {product?.precio}</p>
            <p>{product?.desc}</p>
            <ItemCount getStock={product?.value.stock} getInitial={1} />
            <div classname="card-text"></div>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default ItemDetail;
