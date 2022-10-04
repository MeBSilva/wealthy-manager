import express, { Express, ErrorRequestHandler } from "express";

import {
  endpointNotFoundHandler,
  mainErrorHandler,
} from "@/main/utils/express";

import { setupRoutes } from "./routes";

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use(express.json());
  // app.use(cors())

  setupRoutes(app);

  // 404 handler
  app.use((req, res, next) => endpointNotFoundHandler(req, res, next));

  // Main error handler
  const errorHandler: ErrorRequestHandler = (error, req, res, next) =>
    mainErrorHandler(error, req, res, next);

  app.use(errorHandler);

  return app;
};
