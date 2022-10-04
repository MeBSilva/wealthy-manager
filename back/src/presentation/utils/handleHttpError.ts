import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized,
} from "@/presentation/helpers/HttpHelper";
import { HttpResponse, HttpStatusCode } from "@/presentation/protocols";

export const handleHttpError = (err: HttpResponse): HttpResponse<Error> => {
  switch (err.statusCode) {
    case HttpStatusCode.badRequest:
      return badRequest(err.body);
    case HttpStatusCode.unauthorized:
      return unauthorized();
    case HttpStatusCode.forbidden:
      return forbidden(err.body);
    case HttpStatusCode.notFound:
      return notFound(err.body);
    case HttpStatusCode.serverError:
      return serverError(err.body);
    default:
      return serverError(err.body);
  }
};
