import { HttpResponse } from "@/presentation/protocols";

import { ServerError, UnauthorizedError } from "@/presentation/errors";

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse<Error> => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

export const notFound = (error: Error): HttpResponse<Error> => ({
  statusCode: 404,
  body: error,
});
