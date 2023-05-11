import * as dotenv from "dotenv";
dotenv.config();

import ViteExpress from "vite-express";
import config from "./config";
import app from "./server";

ViteExpress.listen(app, config.port, () =>
  console.log("Server is listening on port 3000...")
);
