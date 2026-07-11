import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";

import "dotenv/config";
import { errorHandler } from "./middleware/errorHandler.js";

const PORT = process.env.PORT;
const frontendPort = process.env.FRONTEND_PORT;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:${frontendPort}`,
  }),
);

app.use("/", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
