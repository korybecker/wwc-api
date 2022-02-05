import { Request, Response } from "express";
import User from "../models/user.model";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (err) {
    res.json(500).json({ msg: err });
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err, body: req.body });
  }
};

const getSingleUser = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `no user exists with id ${req.params.id}` });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateUser = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ msg: `no user exists with id ${req.params.id}` });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteUser = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `no user exists with id ${req.params.id}` });
    }
    res.status(200).json({ success: "success" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const controllers = {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

export default controllers;
