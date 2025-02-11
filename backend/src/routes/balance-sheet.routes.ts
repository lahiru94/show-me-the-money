import { Request, Response, Router } from "express";
import { getBalanceSheetController } from "../controllers/balance-sheet.controller";
const router = Router();

router.get("/balance-sheet", getBalanceSheetController);

export default router;