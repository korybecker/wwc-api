import { Types } from "mongoose";

// chatter interface expects _id
export default interface IChatter extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  role: string;
}
