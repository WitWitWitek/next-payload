import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    onInit: async (cms) => {
      cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
    },
  });

  app.listen(3000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    );
  });
};

start();
