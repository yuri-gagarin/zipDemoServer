import express from "express";
import combinedRoutes from "./routes/combinedRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// api routes //
const router = express.Router();

// initialize routes //
combinedRoutes(router);
app.use(router);

app.listen(PORT, () => {
  console.log("Listening...");
  console.log(`Running at PORT: ${PORT}`);
});