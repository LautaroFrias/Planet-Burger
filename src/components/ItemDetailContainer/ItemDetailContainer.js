import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { paramId } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "items", paramId))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setProduct(product);
        console.log(querySnapshot.data);
      })
      .catch((error) => {
        console.log("Error searching Item", error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [paramId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
