import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({products}) => {
  return (
      <div className="listProduct">
        {console.log(products)}
        {products.length !== 0? (
          products.map((item) => <Item key={item.id} product={item} />)
        ) : (
        <div className="text-center">
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> 
        )}
      </div>
  )
}
export default ItemList;


<div className="text-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> 