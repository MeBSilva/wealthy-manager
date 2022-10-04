import { Request, Response } from "express";

import { Controller, HttpResponse } from "@/presentation/protocols";

import {
  handleBigIntResponse,
  handleRequestParams,
} from "@/main/utils/express";

export const adaptRoute =
  (controller: Controller<any, HttpResponse>, passHeaders?: boolean) =>
  async (req: Request, res: Response) => {
    const request = handleRequestParams(req);

    if (passHeaders) Object.assign(request, { ...req.headers });

    const response = await controller.handle(request);

    const httpResponse = handleBigIntResponse(response);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body,
      });
    }
  };
