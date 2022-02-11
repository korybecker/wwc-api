import express from "express";
import controllers from "../controllers/chatters.controller";

const router = express.Router();

router
  .route("/register")
  .post(controllers.registerChatter)
  .get(controllers.getAllChatters);

export default router;
