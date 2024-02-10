import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import path from "path";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import Users from "./collections/Users";
import { Posts } from "./collections/Posts";
import { slateEditor } from "@payloadcms/richtext-slate";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Posts],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, "./payload-types.ts"),
  },
});
