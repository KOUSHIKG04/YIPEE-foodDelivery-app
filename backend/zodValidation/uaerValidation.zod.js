import { z } from "zod";
import userModel from "../models/userModel.js";

const userSchema = z.object({
  _id: z.string().nonempty("User ID is required"),
});

const addToCartSchema = z.object({
  user: userSchema,
  itemId: z.string().nonempty("Item ID is required"),
});

const removeFromCartSchema = z.object({
  user: userSchema,
  itemId: z.string().nonempty("Item ID is required"),
});

const getCartSchema = z.object({
  user: userSchema,
});

export { userSchema, addToCartSchema, removeFromCartSchema, getCartSchema };
