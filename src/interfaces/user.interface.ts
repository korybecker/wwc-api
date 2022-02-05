import { Document } from "mongoose";

interface IUser extends Document {
  user: string;
}

export default IUser;
