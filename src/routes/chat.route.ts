import express from "express";
import controllers from "../controllers/chats.controller";

const router = express.Router();

router.route("/").get(controllers.getAllChats).post(controllers.createChat);

router
  .route("/:id")
  .get(controllers.getSingleChat)
  .patch(controllers.updateChat)
  .delete(controllers.deleteChat);

export default router;
