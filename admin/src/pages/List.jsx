import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ URL }) => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/food/list`);
      if (!response.data.success) {
        toast.error(response.data.message || "Failed to Load items");
      } else {
        const items = response.data.data;
        if (items.length === 0) {
          toast.error("No items found.");
        } else {
          setList(items);
          toast.success(response.data.message || "Got List successfully");
        }
      }
    } catch (error) {
      toast.error("Error fetching list: " + error.message);
    }
  };

  const removeFood = async (foodId) => {
    try {
      // Optimistically update the UI by removing the item locally first
      const updatedList = list.filter((item) => item._id !== foodId);
      setList(updatedList);

      const response = await axios.delete(`${URL}/api/v1/food/remove`, {
        data: { id: foodId },
      });

      if (!response.data.success) {
        // If the server response indicates failure, roll back the change
        toast.error(response.data.message || "Failed to remove item");
        setList((prevList) => [
          ...prevList,
          list.find((item) => item._id === foodId),
        ]);
      } else {
        toast.success(response.data.message || "Item removed successfully");
      }
    } catch (error) {
      // Handle any errors that occur during the request
      toast.error("Error removing item: " + error.message);

      // Roll back the change if an error occurs
      setList((prevList) => [
        ...prevList,
        list.find((item) => item._id === foodId),
      ]);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold ml-10 mb-4">All Food List</p>
      <div className="w-full p-4 ml-4">
        <div className=" font-medium grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 p-3 border-b bg-gray-100 text-xs sm:text-sm rounded-lg">
          <b>Image</b>
          <b className="ml-2">Name</b>
          <b className="hidden sm:block">Category</b>
          <b className="hidden md:block">Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 items-center p-3 border-b text-xs sm:text-sm"
          >
            <img
              src={`${URL}/images/${item.image}`}
              alt={item.name}
              className="w-24 h-16 sm:w-30 sm:h-20 object-cover rounded-lg"
            />
            <p className="ml-2">{item.name}</p>
            <p className="hidden sm:block">{item.category}</p>
            <p className="hidden md:block">${item.price}</p>
            <svg
              onClick={() => {
                removeFood(item._id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
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
        ))}
      </div>
    </div>
  );
};

export default List;
