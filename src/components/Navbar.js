import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">devARcoder</Link>
      <Link to="/cart">🛒 Cart</Link>
    </nav>
  );
};
export default Navbar;