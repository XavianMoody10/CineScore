import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  server.listen();
});
