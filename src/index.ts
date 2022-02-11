import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import chat from "./routes/chat.route";
import register from "./routes/register.route";
import login from "./routes/login.route";
import logout from "./routes/logout.route";
import me from "./routes/me.route";
import connectDB from "./db/connect";
import config from "./config/config";
import requireAuth from "./middleware/auth.middleware";
import errorHandler from "./middleware/error.middleware";
import reqAuth from "./middleware/reqAuth.middleware";

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(reqAuth);

// routes
app.use("/api/v1", chat, register, login, logout, me);
app.use("/api/v1/chat", requireAuth);

// error handler
app.use(errorHandler);

const PORT = config.server.port || 3001;

const start = async (): Promise<void> => {
  try {
    await connectDB(config.mongo.url);
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
