import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const URL = "http://localhost:3000";

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodlist] = useState({});

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }

    if (token) {
      await axios.post(
        `${URL}/api/v1/cart/add`,
        { itemId },
        { headers: { token } }
      );
    }

    if (token) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }

    if (token) {
      await axios.delete(`${URL}/api/v1/cart/remove`, {
        headers: { token },
        data: { itemId },
      });
    }

    if (token) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getFoodList = async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/food/list`);
      setFoodlist(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        // `${URL}/api/v1/cart/get`,
        {},
        { headers: token }
      );
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        if (token) {
          setCartItems(JSON.parse(storedCartItems));
        } else {
          localStorage.removeItem("cartItems");
        }
      }
      await getFoodList();

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotal,
    URL,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
