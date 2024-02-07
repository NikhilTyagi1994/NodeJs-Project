import * as fs from "fs";
import * as path from "path";
import * as ExcelJS from "exceljs";
import { Request, Response, Router } from "express";

const router: Router = Router();

const jsonFilePath = path.join(__dirname, "../input.json");
const excelFilePath = path.join(__dirname, "../output.xlsx");

router.get("/create-excel", (req: Request, res: Response) => {
  try {
    const jsonData = readJsonFile(jsonFilePath);
    writeDataToExcel(jsonData, excelFilePath);

    res.send("Excel file created successfully");
  } catch (error) {
    console.error("Error creating Excel file:", error);
    res.status(500).send("Internal Server Error");
  }
});

const readJsonFile = (filePath: string): any => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

const writeDataToExcel = (jsonData: any[], excelFilePath: string): void => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet 1");

  worksheet.addRow(Object.keys(jsonData[1]));
  jsonData.forEach((data) => {
    worksheet.addRow(Object.values(data));
  });

  workbook.xlsx
    .writeFile(excelFilePath)
    .then(() => console.log("Excel file written successfully"))
    .catch((error) => {
      console.error("Error writing Excel file:", error);
      throw error;
    });
};

export default router;
