import express from "express";
import routes from "./routes/index.js";
import logger from "./middlewares/logger.js";
import { getClient } from "./database/db.js";

const app = express();

(async () => {
  const clientStatus = await getClient();
  if (clientStatus.connected) {
    console.log("Banco conectado:", clientStatus.message);
  } else {
    console.error(" Banco não conectado:", clientStatus.message);
  }
})();

app.use(express.json());
app.use(logger);
app.use("/api", routes);

export default app;
