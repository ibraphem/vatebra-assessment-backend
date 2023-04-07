import express from "express";
import { isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import { lists } from "../controllers/listController.js";

const listRoutes = express.Router();

listRoutes.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await lists();
    res.send(result);
  })
);

export default listRoutes;
