import express from "express";
import ueasRouter from "./routes/ueas";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

app.use("/api/ueas/", ueasRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
