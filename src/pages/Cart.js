import React from "react";
import { useCart } from "../context/CartContext";
const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="p-4 h-[80vh]">
      <h1 className="text-2xl font-bold text-center pt-12">Shopping Cart</h1>
      {cart.length === 0 ? <p className="text-center text-xl font-semibold text-gray-500">Cart is empty.</p> : cart.map((item) => (
        <div key={item.id} className="border p-2 my-2">
            <div className="flex space-x-6">
                <img className="h-24 w-24" src={item.image} alt="" />
                <div className="flex flex-col justify-center">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                </div>
            </div>
          
        </div>
      ))}
    </div>
  );
};
export default Cart;