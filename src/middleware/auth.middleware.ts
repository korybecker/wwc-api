import { NextFunction, Request, Response } from "express";
// import CustomRequest from "../interfaces/customrequest.interfaces";

import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Chatter from "../models/chatter.model";

const requireAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    // console.log(req.headers);
    // token sent in authorization header
    // Bearer <token>
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // get token from header
        token = req.headers.authorization.split(" ")[1];

        // verify token
        const { id } = jwt.verify(
          token,
          process.env.TOKEN_KEY as string
        ) as JwtPayload; // defined in @types, gives id

        // get user from token                    wont include password
        req.chatter = await Chatter.findById(id).select("-password");
        return next();
      } catch (err) {
        // 401 not authorized
        res.status(401);
        throw new Error("Not authorized");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

export default requireAuth;
