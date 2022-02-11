import { Types } from "mongoose";

export default interface IChatter extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  role: string;
}
