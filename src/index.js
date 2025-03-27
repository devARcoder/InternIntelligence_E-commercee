import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);