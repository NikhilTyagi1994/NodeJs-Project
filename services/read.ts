import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const toRead = (req: Request, res: Response) => {
  let fileData: string | Error;

  const filePath = path.join(__dirname, "../test.txt");
  fs.readFile(
    filePath,
    {
      encoding: "utf-8",
    },
    (error, data) => {
      if (error) {
        fileData = error;
      } else {
        fileData = data;
      }
      res.send({ message: "It's done", data: fileData });
    }
  );
};

export default toRead;
