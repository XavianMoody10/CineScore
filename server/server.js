import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import trendingRouter from "./src/routes/trending.route.js";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/trending", trendingRouter);

// Server
app.listen(PORT, () => {
  server.listen();
});
