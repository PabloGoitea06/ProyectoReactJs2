import React from "react";
import CartWidget from "./CartWidget";
import Brand from "../components/Brand";
import { Link } from "react-router-dom";

const styles = {
  header: {
    margin: "0",
    padding: "0",
    boxSizing: "0",
    width: "100%",
    height: "150px",
    backgroundColor: "red",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    width: "600px",
  },
};
const NavBar = (props) => {
  return (
    <header style={styles.header}>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <ul style={styles.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Accesories">Accesories</Link>
          </li>
          <li>
            <Link to="/category/Indumentary">Indumentary</Link>
          </li>
        </ul>
      </nav>

      <div className="containerCart">
        <CartWidget height={40} width={40} fill={props.fill} />
      </div>
    </header>
  );
};

export default NavBar;
