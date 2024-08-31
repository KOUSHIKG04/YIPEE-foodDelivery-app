import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotal, token, food_list, cartItems, URL } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotal() + 2,
    };
    let response = await axios.post(`${URL}/api/v1/order/place`, orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      const { approvalUrl } = response.data;
        window.location.replace(approvalUrl);
    } else {
      console.log(response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-start p-4">
      <form
        onSubmit={placeOrder}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-9 mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="flex-1 shadow-md p-4 rounded-lg">
            <p className="text-2xl font-semibold mb-5">Delivery Information</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 mb-4">
                <input
                  required
                  name="firstName"
                  onChange={onChangeHandeler}
                  value={data.firstName}
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  required
                  name="lastName"
                  onChange={onChangeHandeler}
                  value={data.lastName}
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
              <input
                required
                name="email"
                onChange={onChangeHandeler}
                value={data.email}
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 "
              />
              <input
                required
                name="street"
                onChange={onChangeHandeler}
                value={data.street}
                type="text"
                placeholder="Street"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 "
              />
              <div className="flex gap-4 mb-4">
                <input
                  required
                  name="city"
                  onChange={onChangeHandeler}
                  value={data.city}
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  required
                  name="state"
                  onChange={onChangeHandeler}
                  value={data.state}
                  type="text"
                  placeholder="State"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
              <div className="flex gap-4 mb-6">
                <input
                  required
                  name="zipcode"
                  onChange={onChangeHandeler}
                  value={data.zipcode}
                  type="text"
                  placeholder="Zip Code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  required
                  name="country"
                  onChange={onChangeHandeler}
                  value={data.country}
                  type="text"
                  placeholder="Country"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
                <input
                  required
                  name="phone"
                  onChange={onChangeHandeler}
                  value={data.phone}
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
            <button
              type="submit"
              className="w-full  bg-red-500 text-white hover:bg-red-600 py-2 rounded-lg"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
