import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/api";
import { useCart } from "../context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);
  if (!product) return <p className="text-center text-2xl py-20">Loading...</p>;
  return (
    <div className="p-6  h-[80vh]">
      <img src={product.image} alt={product.title} className="h-60 mx-auto" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <button className="bg-green-500 hover:bg-green-700 rounded-md text-white px-4 py-2" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductDetails;