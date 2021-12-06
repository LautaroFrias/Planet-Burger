import { useState, useEffect } from "react";
import { getItem } from "../Products/Products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemList/ItemList.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const detail = getItem();

    detail.then((itemDetail) => {
      setProduct(itemDetail);
    });
  });

  return (
    <div className="ListItem">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
