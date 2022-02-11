import express from "express";
import controllers from "../controllers/chats.controller";
import userController from "../controllers/chatters.controller";
import requireAuth from "../middleware/auth.middleware";

const router = express.Router();

// router
//   .route("/chat")
//   .get(userController.verifyToken, controllers.getAllChats)
//   .post(controllers.createChat);

router
  .route("/chat")
  .get(requireAuth, controllers.getAllChats)
  .post(requireAuth, controllers.createChat);

router
  .route("/chat/:id")
  .get(controllers.getSingleChat)
  .patch(controllers.updateChat)
  .delete(controllers.deleteChat);

export default router;
