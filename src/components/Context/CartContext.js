import React, { useState, useContext } from "react";
import NotificationContext from "../Context/NotificationContext";

const CartContext = React.createContext([]);

export const CartContextProvider = ({ children }) => {
  const [Item, setItem] = useState([]);
  const { setNotification } = useContext(NotificationContext);

  const addItem = (item, amount) => {
    const product = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      amount: amount,
      tamaño: item.tamaño,
      img: item.img,
    };
    setItem([...Item, product]);
  };

  const addItemById = (product, count, stock) => {
    if (isInCart(product)) {
      let prod = product.find((el) => el.id === product);
      const sum = (it1, it2) => {
        return it1 + it2;
      };
      if (sum(prod.amount, count) <= stock) {
        prod.amount += count;
        setNotification("success", `Se agregó al carrito ${count} unidades`);
      } else {
        setNotification("error", `No quedan mas unidades disponibles`);
      }
    }
  };

  const countItems = () => {
    let count = 0;
    Item.forEach((prod) => {
      count += prod.amount;
    });
    console.log(count);
    return count;
  };
  countItems();

  const removeItem = (itemId) => {
    const deleteProduct = Item.filter((product) => product.id === itemId);
    setItem(deleteProduct);
  };

  const totalSum = () => {
    let total = 0;
    Item.forEach(({ amount, precio }) => {
      total = total + amount * precio;
    });
    return total;
  };

  const isInCart = (id) => {
    const isIqual = Item.find((product) => product.id === id);
    return isIqual === undefined ? false : true;
  };
  console.log(Item);

  const clear = () => {
    setItem([]);
  };

  return (
    <CartContext.Provider
      value={{
        Item,
        addItem,
        removeItem,
        clear,
        isInCart,
        addItemById,
        countItems,
        totalSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
