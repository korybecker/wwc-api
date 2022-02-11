import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import IChatter from "../interfaces/chatter.interface";

const ChatterSchema = new Schema<IChatter>(
  {
    username: {
      type: String,
      required: [true, "Please enter a valid username"],
      min: 3,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      min: 8,
    },
    role: { type: String },
  }
  // {
  //   timestamps: true, // updated at, created at
  // }
);

// static method to login user
// ChatterSchema.static(
//   "login",
//   async function login(username: string, password: string) {
//     const chatter = await this.findOne({ username });
//     if (chatter && (await bcrypt.compare(password, chatter.password))) {
//       return chatter;
//     }
//     throw Error("incorrect username");
//   }
// );

// hash password "pre-" "save" of document
ChatterSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model<IChatter>("Chatter", ChatterSchema);
