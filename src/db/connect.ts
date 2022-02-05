import mongoose, { Mongoose } from "mongoose";

const connectDB = (url: string): Promise<Mongoose> => {
  return mongoose.connect(url);
};

export default connectDB;
