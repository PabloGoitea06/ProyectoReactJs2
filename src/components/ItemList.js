import React from "react";
import Item from "./Item";




const ItemList = ({ productos }) => {

  const styles = {
    sectorImg:{
      "display" : "inline"
    }
  }

  
  return (
    <div className="sectorImg" stlye={styles.sectorImg}>
      {productos.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </div>
  );
};

export default ItemList;
