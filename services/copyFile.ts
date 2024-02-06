import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const toCopy = async (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "../test.txt");
  fs.copyFile(filePath, "duplicated_file.txt", (err) => {
    if (err) {
      res.send({ message: "Error in file", err });
    } else {
      const text: string = fs.readFileSync("duplicated_file.txt", {
        encoding: "utf8",
      });
      res.send({ message: "File copied", text });
    }
  });
};

export default toCopy;
