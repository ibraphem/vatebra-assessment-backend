import express from "express";
import { isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import { locations } from "../controllers/locationController.js";

const locationRoutes = express.Router();

locationRoutes.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const result = await locations();
    res.send(result);
  })
);

export default locationRoutes;
