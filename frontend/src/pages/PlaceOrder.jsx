import React, { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";

const PlaceOrder = () => {
  const { getTotal } = useContext(StoreContext);

  return (
    <div className="flex justify-center items-start p-4">
      <form className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-9 mb-8">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="flex-1 shadow-md p-4 rounded-lg">
            <p className="text-2xl font-semibold mb-5">Delivery Information</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 "
              />
              <input
                type="text"
                placeholder="Street"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 "
              />
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-6 rounded-lg">
            <div className="mb-6">
              <h2 className="text-lg font-bold">Cart Totals</h2>
              <div className="mt-4">
                <div className="flex justify-between text-gray-600 mb-2">
                  <p>Subtotal</p>
                  <p>${getTotal()}</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-gray-600 mb-2">
                  <p>Delivery Fee</p>
                  <p>{getTotal() === 0 ? 0 : 2}</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-gray-800 font-bold mb-4">
                  <p>Total</p>
                  <p>${getTotal() === 0 ? 0 : getTotal() + 2}</p>
                </div>
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
            <button className="w-full  bg-red-500 text-white hover:bg-red-600 py-2 rounded-lg">
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
