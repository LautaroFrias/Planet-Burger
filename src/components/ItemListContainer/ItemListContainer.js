import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList product="products" />
      {/* <ItemCount stock='5' initial='1' onAdd='Gracias por su compra'/> */}
    </div>
  );
};

export default ItemListContainer;
