import express from "express";
import controllers from "../controllers/chats.controller";

const router = express.Router();

router.route("/chat").get(controllers.getAllChats).post(controllers.createChat);

router
  .route("/chat/:id")
  .get(controllers.getSingleChat)
  .patch(controllers.updateChat)
  .delete(controllers.deleteChat);

export default router;
