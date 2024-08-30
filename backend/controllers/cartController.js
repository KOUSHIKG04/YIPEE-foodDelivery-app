import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.user._id });
    let cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.user._id, { cartData });

    res.json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error adding to cart",
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.user._id });

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = userData.cartData;

    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1;

      if (cartData[req.body.itemId] <= 0) {
        delete cartData[req.body.itemId];
      }

      await userModel.findByIdAndUpdate(req.body.user._id, { cartData });

      res.json({
        success: true,
        message: "Item removed from cart",
      });
    } else {
      res.json({
        success: false,
        message: "Item not found in cart",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error removing item from cart",
    });
  }
};

export const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.user._id });

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = userData.cartData;

    res.json({
      success: true,
      cart: cartData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error retrieving cart data",
    });
  }
};
