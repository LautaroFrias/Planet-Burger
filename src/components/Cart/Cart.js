import ItemCart from "../ItemCart/ItemCart";
import { useState } from "react";
import { UseCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, doc, writeBatch, getDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, CalculatePrice, deleteAllCart, getUser } = UseCart();
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [form, getForm] = useState({ nombre: "", email: "" });

  const llenarFormulario = (e) => {
    const { name, value } = e.target;
    getForm({
      ...form,
      [name]: value,
    });
  };

  const date = new Date();

  const finalizar = () => {
    getUser(form);
    setLoadingOrder(true);

    const db = getFirestore();

    const newOrder = {
      buyer: { email: form.email, nombre: form.nombre },
      items: cart,
      date: date,
      total: CalculatePrice(),
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    newOrder.items.forEach((prod) => {
      getDoc(doc(db, "products", prod.id)).then((docSnap) => {
        if (docSnap.data().stock >= prod.amount) {
          batch.update(doc(db, "products", docSnap.id), {
            stock: docSnap.data().stock - prod.amount,
          });
        } else {
          outOfStock.push({ id: docSnap.id, ...docSnap.data() });
        }
      });
    });
    if (outOfStock.length === 0) {
      addDoc(collection(db, "tickets"), newOrder)
        .then((doc) => {
          batch.commit().then(() => {
            console.log(`el num de orden es ${doc.id}`);
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setTimeout(() => {
            <Link to={"/buyOrders"} />;
            deleteAllCart();
          }, 2500);
        });
    }
  };

  return (
    <div className='cartProducts '>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div>
        <h2>Total Productos: {CalculatePrice()}</h2>
      </div>
      {cart.length === 0 ? (
        <div>
          <h2>EL CARRITO ESTA VACIO</h2>
          <Link to={"/"} className='btn btn-primary btn-lg'>
            Volver a Inicio
          </Link>
        </div>
      ) : (
        <div className='divCartProducts'>
          <button className='btn btn-danger' onClick={deleteAllCart}>
            Vaciar Carrito
          </button>
        </div>
      )}
      {!loadingOrder ? (
        <form method='POST' onSubmit={finalizar} style={{ margin: "15px 0px" }}>
          <input onChange={llenarFormulario} type='email' name='email' placeholder='email' />
          <input onChange={llenarFormulario} type='text' name='nombre' placeholder='nombre' />
          <button
            className='btn btn-success'
            onClick={cart?.length === 0 || form.nombre === "" || form.email === ""}
          >
            Finalizar compra
          </button>
        </form>
      ) : (
        <h1>Estamos generando su orden, será redirigido a las Ordenes de Compra</h1>
      )}
    </div>
  );
};

export default Cart;
