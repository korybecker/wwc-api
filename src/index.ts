import express from "express";
import bodyParser from "body-parser";
import chat from "./routes/chat.route";
import user from "./routes/user.route";
import register from "./routes/register.route";
import connectDB from "./db/connect";
import config from "./config/config";

const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use("/api/v1", chat, user, register);

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
