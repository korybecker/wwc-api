import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Chatter from "../models/chatter.model";
import { Types } from "mongoose";
import IChatter from "../interfaces/chatter.interface";

const getAllChatters = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chatters = await Chatter.find({});
    if (chatters) {
      res.status(200).json({ chatters });
    } else {
      res.status(500);
      throw new Error("Failed to find chatters");
    }
  }
);

// create JWT
const createToken = (id: Types.ObjectId): string => {
  return jwt.sign(
    {
      id,
    },
    //@ts-ignore
    process.env.TOKEN_KEY,
    {
      expiresIn: "5h",
    }
  );
};

// @desc    Register new Chatter
// @route   POST /api/v1/register
// @access  Pubic
const registerChatter = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    // check if chatter exists
    const chatterExists = await Chatter.findOne({ username });
    if (chatterExists) {
      res.status(400);
      throw new Error("Chatter name already exists");
    }

    const chatter = await Chatter.create({
      username,
      password,
      role: "user",
    });

    if (chatter) {
      // create token
      const token = createToken(chatter._id);
      // res.cookie("jwt", token, { httpOnly: true });
      res.status(201).json({ chatter: chatter._id, token });
    } else {
      res.status(400);
      throw new Error("Invalid chatter data");
    }
  }
);

// @desc    Authenticate a Chatter
// @route   POST /api/v1/login
// @access  Pubic
const loginChatter = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    const chatter = await Chatter.findOne({ username });
    if (chatter && (await bcrypt.compare(password, chatter.password))) {
      const token = createToken(chatter._id);
      // res.cookie("jwt", token, { httpOnly: true });
      res.status(200).json({ chatter: chatter._id, token });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  }
);

// @desc    Get chatter data
// @route   GET /api/v1/me
// @access  Private
const getMe = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { _id, username, role } = (await Chatter.findById(
      req.chatter.id
    )) as IChatter;
    res.status(200).json({ _id, username, role });
  }
);

const logoutChatter = (req: Request, res: Response): void => {
  // res.cookie("jwt", "", { maxAge: 1 });
};

const controllers = {
  getAllChatters,
  getMe,
  registerChatter,
  loginChatter,
  logoutChatter,
};

export default controllers;
