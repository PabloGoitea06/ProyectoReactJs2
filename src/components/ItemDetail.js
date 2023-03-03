import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../context/ShopProvider";
import ItemCount from "./ItemCount"; 


const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const { addProduct } = useContext(Shop);

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} producto/s`);
    setQuantity(cantidad);
    addProduct({ ...detail, quantity: cantidad });
  };

  return (
    <div className="detail-container">
      <img className="detail-img" src={detail.image} alt="detalle" />
      <aside className="detail-aside">
        <h4>{detail.title}</h4>
        {quantity === 0 
        ? 
        
          <ItemCount stock={1} initial={1} onAdd={onAdd} />
        
        : 
        
          <button className="btn btn-primary p-2">
            <Link to="/cart">Go cart</Link>
          </button>
        }
      </aside>
    </div>
  );
};

export default ItemDetail;
