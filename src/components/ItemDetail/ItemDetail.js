import ItemCount from "../ItemCount/ItemCount";
import NotificationContext from "../Context/NotificationContext";
import CartContext from "../Context/CartContext";
import { useState, useContext } from "react";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addItem } = useContext(CartContext);
  const { addItemById } = useContext(CartContext);
  const { isInCart } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const addToCart = (product) => {
    setCount(count + product);
    setNotification("success", `Agregado al Carrito ${product} unidades`);
    itemAdd(product);
  };
  const itemAdd = (count) => {
    if (isInCart(product.nombre)) {
      addItemById(product.id, count, product.stock);
    } else {
      addItem(product, count);
    }
  };

  return (
    <div className='card bg-dark text-white' style={{ width: "18rem" }}>
      {product?.length !== 0 ? (
        <div>
          <h2>{product?.nombre}</h2>
          <img src={product?.img} className='card-img-top' alt='Imagen' />
          <div className='card bg-dark text-white'>
            <h3>Tamaño: {product?.tamaño}</h3>
            <p>Precio: $ {product?.precio}</p>
            <p>{product?.desc}</p>
            <p>Categoria: {product?.categoria}</p>
            <ItemCount onAdd={addToCart} stock={product?.stock} />
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <div
            className='spinner-border'
            style={{ width: "3rem", height: "3rem" }}
            role='status'
          >
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
