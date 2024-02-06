import { Router } from "express";

import toWrite from "../services/write";
import toRead from "../services/read";
import toCopy from "../services/copyFile";

const router: Router = Router();

router.get("/read", toRead);
router.get("/copyFile", toCopy);
router.post("/write", toWrite);

export default router;
