import React, { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotal } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start p-4 mb-8">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-9">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-6 gap-4 text-gray-500 text-xs sm:text-sm mb-4">
              <p className="col-span-1">Items</p>
              <p className="col-span-1.5">Title</p>
              <p className="col-span-1">Price</p>
              <p className="col-span-1">Quantity</p>
              <p className="col-span-1">Total</p>
              <p className="col-span-0.5">Remove</p>
            </div>
            <hr className="my-4" />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-6 gap-4 items-center text-black text-xs sm:text-sm mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 sm:w-16 rounded-lg"
                      />
                      <p className="col-span-1.5">{item.name}</p>
                      <p className="col-span-1">${item.price}</p>
                      <p className="col-span-1 pl-2">{cartItems[item._id]}</p>
                      <p className="col-span-1">
                        ${item.price * cartItems[item._id]}
                      </p>
                      <svg
                        onClick={() => removeFromCart(item._id)}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="cursor-pointer pl-3 w-8 h-8"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#f44336"
                          d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
                        ></path>
                      </svg>
                    </div>
                    <hr className="my-4" />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-600">
                <p>Delivery Fee</p>
                <p>$2</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-800 font-bold">
                <p>Total</p>
                <p>${getTotal() + 2}</p>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-bold mb-4">Promo Code</h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    className="flex-grow px-4 py-2 border rounded-lg"
                  />
                  <button className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg">
                    Submit
                  </button>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                className="mt-4 w-full bg-red-500 text-white hover:bg-red-600 py-2 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/*
import React, { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotal } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start p-4">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <div className=" ml-4 pl-2 grid grid-cols-6 gap-4 text-gray-500 text-xs sm:text-sm mb-4">
            <p className="col-span-1">Items</p>
            <p className="col-span-1.5">Title</p>
            <p className="col-span-1">Price</p>
            <p className="col-span-1">Quantity</p>
            <p className="col-span-1">Total</p>
            <p className="col-span-0.5">Remove</p>
          </div>
          <hr className="my-4" />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="mb-4 ">
                  <div className="ml-4 pl-2 grid grid-cols-6 gap-4 items-center text-black text-xs sm:text-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 sm:w-16 rounded-lg"
                    />
                    <p className="col-span-1.5">{item.name}</p>
                    <p className="col-span-1 ">${item.price}</p>
                    <p className="col-span-1 pl-2">{cartItems[item._id]}</p>
                    <p className="col-span-1">
                      ${item.price * cartItems[item._id]}
                    </p>
                    
                    <svg
                    onClick={() => removeFromCart(item._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="cursor-pointer pl-3 w-8 h-8"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#f44336"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
                    ></path>
                  </svg>
                  </div>
                  <hr className="my-4" />
                </div>
              );
            }
            return null;
          })}
          
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-6 md:mb-0">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="mt-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-600 mb-2">
                <p>Delivery Fee</p>
                <p>$2</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-800 font-bold mb-4">
                <p>Total</p>
                <p>${getTotal() + 2}</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold">Promo Code</h2>
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-grow px-4 py-2 border rounded-lg"
                />
                <button className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="mt-4 w-full bg-red-500 text-white hover:bg-red-600 py-2 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
*/
