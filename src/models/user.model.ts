import mongoose, { Mongoose, Schema } from "mongoose";
import IUser from "../interfaces/user.interface";

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    username: { type: String, min: 3, max: 20, required: true, unique: true },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, min: 10, required: true },
    bio: { type: String },
    profilePicture: { type: String, default: "" },
    createdAt: { type: Date, required: true },
    followers: Array,
    following: Array,
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true, // updated at, created at
  }
);

export default mongoose.model<IUser>("User", UserSchema);
