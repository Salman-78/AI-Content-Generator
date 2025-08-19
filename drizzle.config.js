import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_3hKk5LgnEtoJ@ep-misty-term-aepdpqtb-pooler.c-2.us-east-2.aws.neon.tech/ai-content-generator-db_01?sslmode=require&channel_binding=require",
  },
});
