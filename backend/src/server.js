import express from "express";
import routes from "./routes/routes.js";

import "dotenv/config";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
