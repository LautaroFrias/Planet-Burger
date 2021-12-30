import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Mensaje from "../Mensaje/Mensaje";
import { Link } from "react-router-dom";
import { UseCart } from "../../components/Context/CartContext";

const BuyOrders = () => {
  const [order, setOrder] = useState([]);
  const { userEmail } = UseCart();
  const { email } = userEmail;

  useEffect(() => {
    const db = getFirestore();
    const ref = query(collection(db, "tickets"), orderBy("date"));
    getDocs(ref).then((snapshot) => {
      const orden = snapshot.docs.map((doc) => {
        const data = doc.data();
        const { date } = data;
        console.log(date);
        const fecha = new Date(date.seconds * 1000);
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(fecha);
        return {
          id: doc.id,
          ...data,
          date: normalizedCreatedAt,
        };
      });
      setOrder(orden.filter((ticket) => ticket.buyer.email === email));
    });
  }, [email]);

  return (
    <div>
      <>
        {order.length === 0 ? (
          <h1>No hay ordenes de compra agregadas</h1>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>
              Acá podes visualizar todos tus tickets de compra! 🚀
            </h1>
            {order.map((ord) => (
              <Mensaje key={ord?.id} ord={ord} />
            ))}
          </>
        )}
      </>

      <Link to={"/"} className='btn btn-primary btn-lg'>
        Volver a Inicio
      </Link>
    </div>
  );
};

export default BuyOrders;
