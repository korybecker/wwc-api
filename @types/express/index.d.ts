import { Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      chatter: any;
    }
  }
  interface JwtPayload {
    id: string;
  }
}
