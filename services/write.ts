import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const toWrite = (req: Request, res: Response) => {
  const { content } = req.body;
  const filePath = path.join(__dirname, "../newFile.txt");
  if (fs.existsSync(filePath)) {
    fs.appendFile(filePath, content, (error) => {
      if (error) {
        res.send({ error: "Error in file", success: false });
      } else {
        res.send({ Message: "File modified", success: true });
      }
    });
  } else {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        res.send({ error: "Error in file", success: false });
      } else {
        res.send({ Message: "File created", success: true });
      }
    });
  }
};

export default toWrite;
