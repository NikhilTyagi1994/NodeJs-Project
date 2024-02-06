import { Router } from "express";

const router: any = Router();

router.post("/operation", (req: any, res: any) => {
  const { num1, num2, operation } = req.body;

  let result: number = 0;
  switch (operation) {
    case "addition":
      result = num1 + num2;
      break;
    case "substraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      return res.status(201).json({ error: "Invalid operation" });
  }

  res.status(201).json({ message: `${operation} done`, result: result });
});

export default router;
