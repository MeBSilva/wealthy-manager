import { Request, Response, NextFunction } from "express";

import { Controller, HttpResponse } from "@/presentation/protocols";

export const adaptMiddleware =
  (middleware: Controller<any, HttpResponse>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.headers || {}),
    };

    const httpResponse = await middleware.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      Object.assign(req.body, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
