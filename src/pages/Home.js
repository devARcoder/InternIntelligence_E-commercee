import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <>
    <h1 className="text-3xl font-extrabold text-center py-6">E commerce <span className="text-orange-500">Store</span></h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 ">
          <img src={product.image} alt={product.title} className="h-36 py-5 mx-auto transform transition-all duration-700 hover:scale-125" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500 text-xl">View Product</Link>
        </div>
      ))}
    </div>
    </>
  );
};
export default Home;