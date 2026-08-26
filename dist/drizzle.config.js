process.loadEnvFile();
import { config } from "./config.js";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "src/db/schema.ts",
    out: "src/db/generated",
    dialect: "postgresql",
    dbCredentials: {
        url: config.db.url,
    },
});
