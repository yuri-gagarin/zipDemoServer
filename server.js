import express from "express";
import mongoose from "mongoose";

import combinedRoutes from "./routes/combinedRoutes";
import config from "./config/config";

// app setup //
const app = express();
const PORT = process.env.PORT || 3000;

// database connection //
// once properly connected emit a 'ready' event //
const { dbPath, dbOptions } = config;
mongoose.connect(dbPath, dbOptions, () => {
  // db connections logs here //
  console.info("DB Connected");
});
mongoose.connection.once('open', () => {
  app.emit('ready');
});
// END database setup and connection options //

// api routes //
// initialize routes //
const router = express.Router();
combinedRoutes(router);
app.use(router);


// launch the server once eveything is ready //
app.on('ready', () => {
  app.listen(PORT, () => {
    console.info("Listening...");
    console.info(`Running at PORT: ${PORT}`);
  });
});
