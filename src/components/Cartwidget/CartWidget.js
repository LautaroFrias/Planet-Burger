import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"/cart"}>
      <img src='/imagenes/carrito.png' width='40' alt='carrito' />
    </Link>
  );
};

export default CartWidget;
