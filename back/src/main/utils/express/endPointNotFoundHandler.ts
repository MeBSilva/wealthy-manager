import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "@/presentation/errors";
import { notFound } from "@/presentation/helpers/HttpHelper";

export const endpointNotFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new NotFoundError(req.originalUrl);

  const httpError = notFound(error);

  next(httpError);
};
