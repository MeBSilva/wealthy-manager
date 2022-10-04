import { NextFunction, Request, Response } from "express";

import { assertHttpResponse } from "@/presentation/utils";

export const mainErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (assertHttpResponse(err)) {
    res.status(err.statusCode);

    res.json({
      error: err.body,
    });

    return;
  }

  res.status(500);

  res.json({
    message: "API Error.",
  });
};
