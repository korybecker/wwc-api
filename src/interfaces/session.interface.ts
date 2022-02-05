import { Document } from "mongoose";

interface ISession extends Document {
  session: string;
}

export default ISession;
