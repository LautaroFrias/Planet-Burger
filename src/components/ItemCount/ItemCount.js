import React, { useState } from "react";

const ItemCount = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No se puede utilizar numeros negativos");
    }
  };

  return (
    <div className="count">
      <button
        onClick={incrementar}
        type="button"
        className="btn btn-primary btn-lg"
      >
        {" "}
        +{" "}
      </button>
      <span> {count} </span>
      <button
        onClick={decrementar}
        type="button"
        className="btn btn-primary btn-lg"
      >
        {" "}
        -{" "}
      </button>
      <div>
        <button
          onClick={onAdd}
          type="button"
          className="btn btn-warning btn-lg"
        >
          Agregar al carrito
        </button>
      </div>
      <span>
        Stock: {stock} Initial: {initial}{" "}
      </span>
    </div>
  );
};

export default ItemCount;
