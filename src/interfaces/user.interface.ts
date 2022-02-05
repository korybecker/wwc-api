import { Document, Types } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  bio: string;
  profilePicture: string;
  createdAt: Date;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  isAdmin: boolean;
}

export default IUser;
