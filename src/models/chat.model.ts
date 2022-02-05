import mongoose, { Mongoose, Schema } from "mongoose";
import IChat from "../interfaces/chat.interface";

const ChatSchema: Schema<IChat> = new Schema<IChat>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  {
    timestamps: true, // updated at, created at
  }
);

export default mongoose.model<IChat>("Chat", ChatSchema);
