import React, {useState} from 'react';

const ItemCount = ({onAdd, stock, initial}) => {
  
  const [count, setCount] = useState(1);
 
  const Incrementar = () => {
    if (count < 5) 
    {
      setCount (count + 1);  
    }  
  }
  const Decrementar = () => {
    if (count > 1)
    {
      setCount(count - 1);
    }else{
      setCount(0);
      alert('No se puede utilizar numeros negativos')
    }
  }

  return (
    <div>
       <button onClick={Incrementar} type='button' className='btn btn-primary btn-lg'> + </button>
       <span> {count} </span>
       <button onClick={Decrementar} type='button' className='btn btn-primary btn-lg'> - </button>
      <div>
        <button onClick={onAdd} type='button' className='btn btn-warning btn-lg'>Agregar al carrito</button>
      </div>
      <span>Stock: {stock} </span>
    </div>
  )
}

export default ItemCount
