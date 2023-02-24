import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

      const getProducts = async () => {
        let querySnapshot;
        if (categoryId) {
          const q = query(collection(db, "Products"), where("category", "==", categoryId));
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "Products"));
        }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        }
        productosFirebase.push(product);
      });
      setProducts(productosFirebase);   
      };

    getProducts();


  }, [categoryId]);
 
  console.log(products)
  return (
    
      <ItemList productos={products} />
      
      )
}

export default ItemListContainer;
