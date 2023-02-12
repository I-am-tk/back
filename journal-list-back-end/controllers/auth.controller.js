import express from "express";
import { User } from "../db/model/user";

const authRouter = express.Router();

const dummyToken = "dummy_token_123";

authRouter.post("/login", async (req, res) => {
  const username = req.body.username;

  const user = await User.findOne({ username });

  if (!user) {
    return res.json({
      success: false,
      message: "Invalid username",
    });
  }
  return res.json({
    success: true,
    data: {
      user,
      token: dummyToken,
    },
  });
});
export default authRouter;
