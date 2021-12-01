import './Item.css'

const Item = ({ product }) => {
    return(
        <div className="ContainerProductos">
            <div className="Productos">
                <img src={product.img} alt="hamburguesa"/>
                <h3 className='HeaderProductos'>
                    {product.nombre}
                </h3>
                <div class="accordion" id="accordionFlushExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Ver Detalle
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <h4>{product.desc}.</h4>
                <h5><strong>Tamaño: {product.tamaño}</strong></h5>
                </div>
                </div>
                </div>
                <p className="precioProducto">Precio: $ {product.precio}</p>
                <button type='button' className='btn btn-primary btn-lg'>Comprar</button>
                </div>
            </div>
        </div>    
        )
    }

export default Item;