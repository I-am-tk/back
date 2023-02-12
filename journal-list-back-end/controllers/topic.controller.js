import express from "express";
import { Topic } from "../db/model/topic.js";

const topicRouter = express.Router();

topicRouter.get("/all", async (req, res) => {
  const topics = await Topic.findAll();
  return res.json({
    success: true,
    data: topics,
  });
});

topicRouter.post("/create", async (req, res) => {
  const { name, userId } = req.body;
  if (name === undefined) {
    return res.json({
      success: false,
      message: "name property is required",
    });
  }

  const topic = await Topic.create({
    name,
    UserId: userId,
  });
  return res.json({
    success: true,
    data: topic,
  });
});

export default topicRouter;
