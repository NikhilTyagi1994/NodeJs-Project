import express, { Request, Response } from "express";
import airthmeticRoute from "./routes/arithmeticRoutes";
import fileRoute from "./routes/fileRoute";
import convertRoute from "./routes/conversionRoute";

const app = express();

const port: number = 3000;

app.use(express.json());

app.use("/arithmetic", airthmeticRoute);
app.use("/readFile", fileRoute);
app.use("/conversion", convertRoute);

app.get("/test", (req: Request, res: Response) => {
  res.json({ data: "done" });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
