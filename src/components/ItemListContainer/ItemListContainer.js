import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../Products/Products";

const ItemListContainer = ({ greeting }) => {
  const [listProduct, setListProduct] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const list = getCategory(categoryId);

      list.then((response) => {
        console.log(categoryId);
      setListProduct(response);
    }).catch((error) => {
      console.log(error)
    });
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <ItemList products={listProduct} />
    </div>
  );
};

export default ItemListContainer;
