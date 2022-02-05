import { Document, Schema, Types } from "mongoose";
import IUser from "./user.interface";

interface IChat extends Document {
  user: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IChat;
