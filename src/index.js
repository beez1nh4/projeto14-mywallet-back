import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import userRoutes from "./routes/users.routes.js"
import transactionsRoutes from "./routes/transactions.routes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(transactionsRoutes);

app.listen(5000, () => console.log("Port 5000"));