import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "Products", id);
      const products = await getDoc(docRef);

      console.log("productsproductsproductsproducts", products)

      if (products.exists()) {
        console.log("Document data:", products.data());
  
        const productDetail = {
          id,
          ...products.data()
        }
        setDetail(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getProduct();

  }, [id])

return (
  <div>
    {Object.keys(detail).length === 0

    ? <h2>Loading...</h2>
    : <ItemDetail detail={detail} />
    }
  </div>
       )
}
  


  
export default ItemDetailContainer;