import express from "express";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is testing api.");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
