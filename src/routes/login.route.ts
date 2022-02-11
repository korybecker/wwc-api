import express from "express";
import controllers from "../controllers/chatters.controller";

const router = express.Router();

router.route("/login").post(controllers.loginChatter);

export default router;
