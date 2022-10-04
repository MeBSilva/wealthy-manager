import { handleHttpError } from "@/presentation/utils";
import { HttpResponse } from "@/presentation/protocols";
import { serverError, unauthorized } from "@/presentation/helpers/HttpHelper";

test("Assert Error", () => {
  const err = new Error("error");

  const error: HttpResponse = {
    body: err,
    statusCode: 200,
  };

  const error2: HttpResponse = { statusCode: 204, body: err };

  const error3: HttpResponse = {
    body: err,
    statusCode: 401,
  };

  expect(handleHttpError(error)).toStrictEqual(serverError(err));
  expect(handleHttpError(error2)).toStrictEqual(serverError(err));
  expect(handleHttpError(error3)).toStrictEqual(unauthorized());
});
