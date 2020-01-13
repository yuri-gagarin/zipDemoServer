import express from "express";
import mongoose from "mongoose";

import combinedRoutes from "./routes/combinedRoutes";
import config from "./config/config";

// app setup //
const app = express();
const PORT = process.env.PORT || 3000;

// database connection //
const { dbPath, dbOptions } = config;
mongoose.connect(dbPath, dbOptions, () => {
  console.log("db connected");
});

// api routes //
const router = express.Router();

// initialize routes //
combinedRoutes(router);
app.use(router);

app.listen(PORT, () => {
  console.log("Listening...");
  console.log(`Running at PORT: ${PORT}`);
});