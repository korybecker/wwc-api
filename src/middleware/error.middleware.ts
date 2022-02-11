import { Request, Response, NextFunction } from "express";

export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

const errorHandler = (
  err: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode);

  res.json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};

export default errorHandler;
