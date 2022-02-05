import express, { Request, Response } from "express";
const router = express.Router();

import User from "../models/user.model";

// REGISTER
router.post("/register", async (req: Request, res: Response) => {
  try {
    const user = await new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

export default router;
