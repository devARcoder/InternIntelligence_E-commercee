import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">dev<span className="text-green-500 font-extrabold text-3xl">AR</span>coder</Link>
      <Link to="/cart">🛒 Cart</Link>
    </nav>
  );
};
export default Navbar;