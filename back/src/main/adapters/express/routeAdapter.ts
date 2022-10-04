import { Request, Response } from "express";

import { Controller, HttpResponse } from "@/presentation/protocols";
import { assertError } from "@/presentation/utils";

import { handleRequestParams } from "@/main/utils/express";

export const adaptRoute =
  (controller: Controller<any, HttpResponse>, passHeaders?: boolean) =>
  async (req: Request, res: Response) => {
    const request = handleRequestParams(req);

    if (passHeaders) Object.assign(request, { ...req.headers });

    const httpResponse = await controller.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);

      return;
    }

    if (assertError(httpResponse.body)) {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.name,
        message: httpResponse.body.message,
      });

      return;
    }

    res.status(httpResponse.statusCode).json({
      error: httpResponse.body,
    });
  };
