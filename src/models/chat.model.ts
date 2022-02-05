import mongoose, { Mongoose, Schema } from "mongoose";
import IChat from "../interfaces/chat.interface";

const ChatSchema: Schema<IChat> = new Schema<IChat>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date },
  },
  {
    timestamps: true, // updated at, created at
  }
);

export default mongoose.model<IChat>("Chat", ChatSchema);
