import express from "express";
import { isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import { addTask, tasks } from "../controllers/taskController.js";

const taskRoutes = express.Router();

taskRoutes.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await tasks();
    res.send(result);
  })
);

taskRoutes.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await addTask(req.body);
    res.send(result);
  })
);

export default taskRoutes;
