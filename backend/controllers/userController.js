import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {signupSchema, loginSchema} from '../zodValidation/userValidation.zod.js'
import { z } from "zod";

const loginUser = async (req, res) => {
  try {

    const validatedData = loginSchema.parse(req.body);

    const { email, password } = validatedData;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "user doesn't exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "invalid password",
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.json({
        success: false,
        message: error.errors.map(err => err.message).join(', '),
      });
    }
    console.log(error);
    res.json({
      success: false,
      message: "error",
    });
  }
};

const signupUser = async (req, res) => {
  try {
 
    const validatedData = signupSchema.parse(req.body);

    const { name, email, password } = validatedData;
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "user already exists",
      });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.json({
        success: false,
        message: error.errors.map(err => err.message).join(', '),
      });
    }
    console.log(error);
    res.json({
      success: false,
      message: "error",
    });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export { loginUser, signupUser };


/**
 import validator from "validator";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "user don't exsists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "invalid password",
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error",
    });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exsits = await userModel.findOne({ email });
    if (exsits) {
      return res.json({
        success: false,
        message: "user already exsists",
      });
    }

    //validating
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter string password",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error",
    });
  }
};

export { loginUser, signupUser };

 */