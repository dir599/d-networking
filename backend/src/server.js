import express from "express";
import routes from "./routes/routes.js";

import "dotenv/config";
import { globalMiddleWare } from "./middleware/error_middleware.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


app.use("/", routes);

app.use(globalMiddleWare)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
