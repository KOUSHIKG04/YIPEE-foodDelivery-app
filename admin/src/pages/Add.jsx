import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ URL }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageChange = (event) => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${URL}/api/v1/food/add`, formData);
      if (!response.data.success) {
        setError(response.data.message || "Failed to add item");
        toast.error(response.data.message || "Failed to add item");
      } else {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        setError(null);
        toast.success(response.data.message || "Item added successfully");
      }
    } catch (error) {
      setError("Error submitting form: " + error.message);
      toast.error("Error submitting form: " + error.message);
    }
  };

  const createObjectURL = (blob) => {
    if (window.URL && typeof window.URL.createObjectURL === "function") {
      return window.URL.createObjectURL(blob);
    } else {
      console.error(
        "URL.createObjectURL is not supported in this environment."
      );
      return assets.upload_area;
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-50 p-6 rounded-xl">
      <div className="w-full max-w-md md:max-w-xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold mb-2">Upload Image</p>
            <label
              htmlFor="image"
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={image ? createObjectURL(image) : assets.upload_area}
                alt="Upload Area"
                className=" w-34 h-24 md:w-34 md:h-18 mb-2 border-5 border-gray-500 mt-2"
              />
              <input
                onChange={onImageChange}
                type="file"
                id="image"
                hidden
                accept="image/*"
                required
              />
            </label>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold mb-2"> </p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Enter Your Product Name"
              className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold mb-2"> </p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="2"
              placeholder="Product Description Here,"
              className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-grow">
              <p className="text-lg font-medium mb-2">Product Category</p>
              <select
                onChange={onChangeHandler}
                name="category"
                className="p-2 border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-lg font-medium mb-2">Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="$20"
                className="p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-red-500 text-white p-2.5 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
