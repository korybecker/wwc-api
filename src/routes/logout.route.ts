import express from "express";
import controllers from "../controllers/chatters.controller";

const router = express.Router();

router.route("/logout").get(controllers.logoutChatter);

export default router;
