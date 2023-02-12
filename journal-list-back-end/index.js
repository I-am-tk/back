import express from "express";
import cors from "cors";
import { dummyTopicList, dummyTopicsData } from "./Data.js";
import authRouter from "./controllers/auth.controller.js";
import topicRouter from "./controllers/topic.controller.js";
import topicDataRouter from "./controllers/topicData.controller.js";
import { sequelize } from "./db/index.js";
import "./db/index"


const PORT = 6000;
const app = express();

export const topicsList = dummyTopicList;
export const topicsData = dummyTopicsData;

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/topic", topicRouter);
app.use("/topic-data", topicDataRouter);

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const testconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testconnection();
