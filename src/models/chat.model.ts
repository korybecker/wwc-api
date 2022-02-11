import mongoose, { Schema } from "mongoose";

export interface IChat extends Document {
  chatter: Schema.Types.ObjectId;
  key: number;
  postText: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema: Schema<IChat> = new Schema<IChat>(
  {
    chatter: {
      type: Schema.Types.ObjectId,
      required: true,
      min: 3,
      max: 20,
      ref: "Chatter",
    },
    key: Number,
    postText: {
      type: String,
      required: [true, "Please enter text to post"],
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // updated at, created at
  }
);

export default mongoose.model<IChat>("Chat", ChatSchema);
