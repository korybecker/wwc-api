import express, { Express, Request, Response, NextFunction } from "express";
const router = express.Router();

const { getAllChats } = require("./controllers/chats.controller");

const routes = (app: Express) => {
  router.route("/chats").get(getAllChats);
};

export default routes;
