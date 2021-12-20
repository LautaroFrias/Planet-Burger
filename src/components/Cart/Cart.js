import ItemCart from "../ItemCart/ItemCart";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { Item } = useContext(CartContext);
  const { totalSum } = useContext(CartContext);
  const { clear } = useContext(CartContext);

  return (
    <div className='CartProducts'>
      {Item.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      {Item.length === 0 ? (
        <div className='divCartProducts'>
          <h2>EL CARRITO ESTA VACIO</h2>
        </div>
      ) : (
        <div className='divCartProducts'>
          <h2>Total $ {totalSum(Item)}</h2>
          <button className='btn btn-danger' onClick={clear}>
            Eliminar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
