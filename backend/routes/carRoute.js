import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.delete("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
