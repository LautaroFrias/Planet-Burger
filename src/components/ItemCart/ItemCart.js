import React from "react";
import NotificationContext from "../Context/NotificationContext";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const removeIt = () => {
    removeItem(product?.id);
    setNotification("error", `Producto eliminado de tu carrito`);
    removeItem(product);
  };

  return (
    <div className='ItemCart'>
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
                <button className='btn btn-danger' onClick={removeIt}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
