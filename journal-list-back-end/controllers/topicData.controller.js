import express from "express";
import { TopicData } from "../db/model/topicData.js";

const topicDataRouter = express.Router();

topicDataRouter.get("/all", async (req, res) => {
  const { topicId } = req.body();
  const topicsData = await TopicData.findAll({
    where: {
      TopicId: topicId,
    },
  });
  return res.json({
    success: true,
    data: topicsData,
  });
});

topicDataRouter.post("/create", async (req, res) => {
  const { text, topicId } = req.body;
  if (!text || !topicId) {
    return res.json({
      success: false,
      message: "text and topicId is required",
    });
  }

  const topicData = await TopicData.create({
    text,
    TopicId: topicId,
  });

  return res.json({
    success: true,
    data: topicData,
  });
});
export default topicDataRouter;
