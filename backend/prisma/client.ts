import { PrismaClient } from "@prisma/client";

/**
 * Make sure to run `npx prisma generate` whenever you change the schema
 * so the generated client in node_modules/@prisma/client stays in sync.
 */
const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? [
          // "query", // uncomment if you want to see all SQL queries in dev
          "error",
          "warn",
        ]
      : ["error"],
});

export default prisma;
