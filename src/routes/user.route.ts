import express from "express";
import controllers from "../controllers/users.controller";

const router = express.Router();

router.route("/user").get(controllers.getAllUsers).post(controllers.createUser);

router
  .route("/user/:id")
  .get(controllers.getSingleUser)
  .patch(controllers.updateUser)
  .delete(controllers.deleteUser);

export default router;
