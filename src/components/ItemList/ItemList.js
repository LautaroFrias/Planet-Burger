import './ItemList.css';
import Item from '../Item/Item';
import { getProducts } from '../Products/Products';
import { useEffect, useState } from 'react';

const ItemList = () => {

const [product, setProduct] = useState([])

    useEffect(() => {
    getProducts().then((products) => {
      setProduct(products);
    })
},[])

    return(
        <div>
        <ul className='listItem'>
            {product.map(product => <Item key={product.nombre} product={product} />)}
        </ul>
        </div>   
    )
}

export default ItemList
