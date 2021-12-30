import React from "react";

const Mensaje = ({ ord }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        margin: "30px",
        padding: "7px",
      }}
    >
      <h2 style={{ color: "green", fontSize: "20px", fontWeight: "600px" }}>
        ID de la compra: {ord.id}
      </h2>
      <h2 style={{ fontSize: "15px" }}>Email: {ord.buyer.email}</h2>
      <h2 style={{ fontSize: "15px" }}>Fecha: {ord.date}</h2>
      <h2 style={{ fontSize: "15px" }}>
        Nombre de los productos:{" "}
        {ord.items.map((prod, index) => (
          <ul key={index}>
            <li>
              {prod?.nombre} ${prod?.precio} x {prod?.amount} unidades
            </li>
            <img width={150} src={prod?.img} alt={prod?.nombre} style={{ paddingTop: "10px" }} />
            <h2 style={{ fontSize: "15px" }}>Total: ${prod?.precio * prod?.amount}</h2>
          </ul>
        ))}
      </h2>
    </div>
  );
};

export default Mensaje;
