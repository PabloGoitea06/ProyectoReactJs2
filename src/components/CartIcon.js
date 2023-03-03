import React, { useContext, useState } from "react";
import { Shop } from "../context/ShopProvider";
import TableRow from "./TableRow";
import generateOrderObject from "../services/generateOrderObject";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase/config';
import { Link } from "react-router-dom";


const styles = {
  form: {
    "fontSize" : "1rem",
    "color" : "red",
    "borderRadius" : "3px"
},
confirm: {
  "borderRadius" : "3px",
  "color" : "blue"
},
tabla:{
  "backgroundColor" : "pink"
}
};

const Cart = () => {
  const { products, total } = useContext(Shop);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // Send state
  };

  const confirmPurchase = async () => {
    const order = generateOrderObject({
      nombre: "pablo",
      email: "pablogoitea@gmail.com",
      telefono: "11404030303",
      cart: products,
      total
    })

  

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Orders"), order);
    //cleanCart();
    console.log("Orden confirmada con ID: ", docRef.id);
  }

  return (
    <>
    {
    products.lenght !== 0 ? 
    <>
      <table style={styles.tabla} className="table table-striped">
        <thead>
          <tr>
            <th scope="row">{"id"}</th>
            <th scope="row">{"Image"}</th>
            <th scope="row">{"title"}</th>
            <th scope="row">{"price"}</th>
            <th scope="row">{"quantity"}</th>
            <th scope="row">{"remove"}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <TableRow key={product.id} product={product} />;
          })}
          ;
        </tbody>
      </table>
      <button style={styles.confirm}  onClick={confirmPurchase}> Confirm purchase </button>
      
        <br></br>
        <br></br>

      <div className="formulario">
      <form style={styles.form}>
        <div className="form-input">
          <label>Nombre</label>
          <input 
          type="text"
          name="nombre"
          value={state.nombre}
          onChange={handleChange}
          />
        </div>

        <br></br>

        <div className="form-input">
          <label>Email</label>
          <input 
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          />
        </div>
      </form>
    </div>
    </>
    :
    <>
    <h1>No hay productgos en el carrito</h1>
    <button>
      <Link to = "/">Home</Link>
    </button>
    </>
} 
</>
  );
};

export default Cart;
