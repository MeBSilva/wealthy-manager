import { EmailInUseError, UserNotFoundError } from "@/domain/errors";

import {
  AccessDeniedError,
  InvalidParamError,
  MissingParamError,
  NotFoundError,
  ServerError,
  UnauthorizedError,
} from "@/presentation/errors";
import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized,
} from "@/presentation/helpers/HttpHelper";
import {
  handleHttpError,
  assertHttpResponse,
  assertError,
} from "@/presentation/utils";
import { Response } from "@/presentation/protocols";

export const handleError = (err: unknown): Response<Error> => {
  if (assertHttpResponse(err) && assertError(err.body))
    return handleHttpError(err);

  if (assertError(err)) {
    switch (err.name) {
      case AccessDeniedError.name:
        return forbidden(err);
      case InvalidParamError.name:
        return badRequest(err);
      case EmailInUseError.name:
        return badRequest(err);
      case UserNotFoundError.name:
        return notFound(err);
      case MissingParamError.name:
        return badRequest(err);
      case NotFoundError.name:
        return notFound(err);
      case UnauthorizedError.name:
        return unauthorized();
      case ServerError.name:
        return serverError(err);
      default:
        console.log(err);
        return serverError(err);
    }
  }

  return serverError(new Error("Internal server error"));
};
