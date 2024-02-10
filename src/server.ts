import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import path from "path";
import { nextHandler, nextApp } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const start = async () => {
  const payloadClient = await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    onInit: async (cms) => {
      cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
    },
  });

  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      payloadClient.logger.info(
        `Next.js is now listening on ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
