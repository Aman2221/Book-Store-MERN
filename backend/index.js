import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, conn_url } from "./config.js";
import router from "./routes/index.js";
const app = express();

app.use(express.json());
app.use("/books", router);
app.use(
  cors()
  // {
  //   origin: "http://localhost:3000",
  //   methods: ["GET", "PUT", "POST", "DELETE"],
  //   allowHeaders: ["Content-Type"],
  // }
);

app.listen(PORT, () => console.log("Express Listening on", PORT));

app.get("/", (req, res) => {
  return res.status(234).send("Running MERN");
});

mongoose
  .connect(conn_url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Error while connecting with DB");
  });
