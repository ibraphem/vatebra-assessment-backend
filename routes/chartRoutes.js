import express from "express";
import { isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import { charts } from "../controllers/chartController.js";

const chartRoutes = express.Router();

chartRoutes.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await charts();
    res.send(result);
  })
);

export default chartRoutes;
