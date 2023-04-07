import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import seedRoutes from "./routes/seedRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import chartRoutes from "./routes/chartRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import listRoutes from "./routes/listRoute.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/seed", seedRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/chart", chartRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/list", listRoutes);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

  mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log("databaseee errorrrrr", err.message));

const port = process.env.PORT || 6500;
app.listen(port, () => {
  console.log(`serve at http:localhost:${port}`);
});