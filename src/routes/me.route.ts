import express from "express";
const router = express.Router();
import controllers from "../controllers/chatters.controller";

import requireAuth from "../middleware/auth.middleware";

router.route("/me").get(requireAuth, controllers.getMe);

export default router;
