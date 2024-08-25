import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://koushikgdatta5:million%40733@cluster0.ycrz6.mongodb.net/yipee-FoodDel"
    )
    .then(() => {
      console.log("DB connected!");
    });
};
