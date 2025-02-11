import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import balanceSheetRoutes from "./routes/balance-sheet.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("You reached show me the money backend!");
});
app.use('/api', balanceSheetRoutes);  

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
