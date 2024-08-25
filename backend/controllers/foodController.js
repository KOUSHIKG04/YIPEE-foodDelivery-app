import foodModel from "../models/foodModel.js";
import fs from "fs";
import {
  addFoodSchema,
  removeFoodSchema,
} from "../zodValidation/foodValidation.zod.js";

const addFood = async (req, res) => {
  try {
    
    const { name, description, price: priceString, category } = req.body;
    const price = parseFloat(priceString);

    
    addFoodSchema.parse({
      name,
      description,
      price,
      category,
    });

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: image_filename,
    });

    await food.save();
    res.json({
      message: "food added",
    });
  } catch (error) {
    res.status(400).json({
      message: error.errors ? error.errors : "ERROR!!!!",
    });
    console.log(error);
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR!!!!",
    });
    console.log(error);
  }
};

const removeFood = async (req, res) => {
  try {
  
    removeFoodSchema.parse(req.body);

    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({
        message: "Food item not found",
      });
    }
    fs.unlink(`upload/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      message: "food removed",
    });
  } catch (error) {
    res.status(400).json({
      message: error.errors ? error.errors : "failed to remove!",
    });
    console.log(error);
  }
};

export { addFood, listFood, removeFood };
