import express from "express";
import expressAsyncHandler from "express-async-handler";
import {  signIn } from "../controllers/userController.js";


const userRoutes = express.Router();
userRoutes.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const result = await signIn(req?.body);
    console.log('result', result);
    res.send(result)
  })
);


export default userRoutes;
