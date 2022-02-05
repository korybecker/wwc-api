import { Document } from "mongoose";

interface IChat extends Document {
  title: string;
  author: string;
  date: Date;
}

export default IChat;
