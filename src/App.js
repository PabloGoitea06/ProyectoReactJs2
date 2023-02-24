import React, { useState } from "react";
import "antd/dist/reset.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { Card, Layout } from "antd";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/CartIcon";
import ShopProvider from "./context/ShopProvider";

const { Content } = Layout;
const { Meta } = Card;

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar fill="#FFF" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Ruta no encontrada</h2>} />
        </Routes>
        <Content style={{ padding: "0 50px" }}>
          <ItemDetailContainer />
        </Content>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
