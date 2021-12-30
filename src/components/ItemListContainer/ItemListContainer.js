import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [listProduct, setListProduct] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) {
      setLoading(true);
      getDocs(collection(db, "items"))
        .then((querySnapshot) => {
          console.log(querySnapshot);
          const products = querySnapshot.docs.map((doc) => {
            console.log(doc);
            return { id: doc.id, ...doc.data() };
          });
          setListProduct(products);
        })
        .catch((error) => {
          console.log("Error al cargar los items", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getDocs(query(collection(db, "items"), where("categoria", "==", categoryId)))
        .then((querySnapshot) => {
          console.log(querySnapshot);
          const products = querySnapshot.docs.map((doc) => {
            console.log(doc);
            return { id: doc.id, ...doc.data() };
          });
          setListProduct(products);
        })
        .catch((error) => {
          console.log("Error al cargar los items", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      setListProduct([]);
    };
  }, [categoryId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='ItemListContainer'>
      <h1>{greeting}</h1>
      <ItemList products={listProduct} />
    </div>
  );
};

export default ItemListContainer;
