import express from "express";
import { dirname } from "path";
import AppRouter from "./route/router.js";

const app = express();

const _dirname = dirname(new URL(import.meta.url).pathname).substring(1);

app.use(express.json());
app.use(express.static(_dirname + "/static"));
console.log(_dirname);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/static/index.html");
});

app.use("/api", AppRouter);

export default app;
