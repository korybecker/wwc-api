import mongoose, { Mongoose, Schema, Types } from "mongoose";

export interface IChat extends Document {
  username: string;
  key: number;
  postText: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema: Schema<IChat> = new Schema<IChat>(
  {
    username: { type: String, min: 3, max: 20 },
    key: Number,
    postText: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  {
    timestamps: true, // updated at, created at
  }
);

export default mongoose.model<IChat>("Chat", ChatSchema);
