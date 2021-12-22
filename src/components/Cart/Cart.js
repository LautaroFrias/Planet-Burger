import ItemCart from "../ItemCart/ItemCart";
import { UseCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, CalculatePrice, deleteAllCart } = UseCart();

  return (
    <div className='cartProducts'>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      {cart.length === 0 ? (
        <div>
          <h2>EL CARRITO ESTA VACIO</h2>
          <Link to={"/"} className='btn btn-success btn-lg'>
            Volver a Inicio
          </Link>
        </div>
      ) : (
        <div className='divCartProducts'>
          <h2>Total Productos: {CalculatePrice()}</h2>
          <button className='btn btn-danger' onClick={deleteAllCart}>
            Limpiar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
