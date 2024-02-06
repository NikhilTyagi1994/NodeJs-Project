import express, { Request, Response } from "express";


const app = express();

const port:number = 3000;


app.get("/test", (req: Request, res: Response) => {
  res.json({ data: "done" });
});

app.listen(port, () => {
  console.log("listening on port", port);
});