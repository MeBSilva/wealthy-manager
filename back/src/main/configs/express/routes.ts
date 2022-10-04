import { Express, Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  const routesDir = join(__dirname, "..", "..", "./routes");

  readdirSync(routesDir).map(async (file) => {
    const fullPath = join(routesDir, file);

    const importedRoute = await import(fullPath);

    // Calls default function if it exists on file
    if (
      Object.entries(importedRoute).map(
        (item) => !!(item[0] === "default" && item[1])
      ).length > 0
    ) {
      importedRoute.default(router);
    }
    // }
  });
};
