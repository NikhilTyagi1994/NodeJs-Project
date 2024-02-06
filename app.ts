import express, { Request, Response } from "express";
import airthmeticRoute from "./routes/arithmeticRoutes";
import fileRoute from "./routes/fileRoute";

const app = express();

const port: number = 3000;

app.use(express.json());

app.use("/arithmetic", airthmeticRoute);
app.use("/readFile", fileRoute);

app.get("/test", (req: Request, res: Response) => {
  res.json({ data: "done" });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
