import React, { useContext } from "react";
import { fe_assets } from "@/assets/frontend_assets/assets";
import { StoreContext } from "@/context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, URL } =
    useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  return (
    <div className="w-full mx-auto rounded-lg shadow-md animate-fadeIn">
      <div className="relative">
        <img
          src={`${URL}/images/${image}`}
          className="w-full rounded-t-lg"
          alt={name}
        />
        {itemCount === 0 ? (
          <img
            className="absolute h-8 w-8 bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={fe_assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-4 p-1 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={fe_assets.remove_icon_red}
              className="h-6 w-6 cursor-pointer"
              alt="Remove"
            />
            <p className="text-lg font-semibold">{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={fe_assets.add_icon_green}
              className="h-6 w-6 cursor-pointer"
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-md font-medium">{name}</p>
          <img src={fe_assets.rating_starts} className="w-16" alt="Rating" />
        </div>
        <p className="text-gray-500 text-sm text-left mb-3">{description}</p>
        <div className="text-red-500 text-lg text-left font-medium">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
