import { Request, Response } from "express";
import Chat from "../models/chat.model";
import asyncHandler from "express-async-handler";

const getAllChats = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chats = await Chat.find({});
    if (chats) {
      res.status(200).json({ chats });
    } else {
      res.json(500);
      throw new Error("could not get chats");
    }
  }
);

const createChat = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chat = await Chat.create({
      chatter: req.chatter,
      key: req.body.key,
      postText: req.body.postText,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (chat) {
      res.status(201).json({ chat });
    } else {
      res.status(500);
      throw new Error("could not create chat");
    }
  }
);

const getSingleChat = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      res.status(404);
      throw new Error(`could not get chat with id ${req.params.id}`);
    }
    res.status(200).json(chat);
  }
);

const updateChat = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!chat) {
      res.status(404);
      throw new Error(`could not get chat with id ${req.params.id}`);
    }
    res.status(200).json({ chat });
  }
);

const deleteChat = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    if (!chat) {
      res.status(404);
      throw new Error(`could not get chat with id ${req.params.id}`);
    }
    res.status(200).json({ success: "success" });
  }
);

const controllers = {
  getAllChats,
  createChat,
  getSingleChat,
  updateChat,
  deleteChat,
};

export default controllers;
