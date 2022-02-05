import { Request, Response } from "express";
import Chat from "../models/chat.model";

const getAllChats = async (req: Request, res: Response): Promise<void> => {
  try {
    const chats = await Chat.find({});
    res.status(200).json({ chats });
  } catch (err) {
    res.json(500).json({ msg: err });
  }
};

const createChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const chat = await Chat.create(req.body);
    res.status(201).json({ chat });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getSingleChat = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return res
        .status(404)
        .json({ msg: `no chat exists with id ${req.params.id}` });
    }
    res.status(200).json({ chat });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateChat = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!chat) {
      return res
        .status(404)
        .json({ msg: `no chat exists with id ${req.params.id}` });
    }
    res.status(200).json({ chat });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteChat = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    if (!chat) {
      return res
        .status(404)
        .json({ msg: `no chat exists with id ${req.params.id}` });
    }
    res.status(200).json({ chat });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const controllers = {
  getAllChats,
  createChat,
  getSingleChat,
  updateChat,
  deleteChat,
};

export default controllers;
