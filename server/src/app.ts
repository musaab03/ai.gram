import express, { Application, Request, Response, Router } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDb from "./db/connect";
import postRoutes from "./routes/postRoutes";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req: Request, res: Response<string>): Promise<void> => {
  res.send("AI says Hi!");
});

const startServer = async (): Promise<void> => {
  try {
    connectDb(process.env.MONGO_URI as string);
    app.listen(8080, () => {
      console.log("Server listening on http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
