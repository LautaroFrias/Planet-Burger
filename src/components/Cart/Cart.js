import ItemCart from "../ItemCart/ItemCart";
import { UseCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, CalculatePrice, deleteAllCart } = UseCart();

  return (
    <div className='CartProducts'>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      {cart.length === 0 ? (
        <div className='divCartProducts'>
          <h2>EL CARRITO ESTA VACIO</h2>
        </div>
      ) : (
        <div className='divCartProducts'>
          <h2>Total $ {CalculatePrice()}</h2>
          <button className='btn btn-danger' onClick={deleteAllCart}>
            Eliminar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
