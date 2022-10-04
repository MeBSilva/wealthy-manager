import { Response } from "../protocols";

import { assertError } from "./assertError";

export const assertResponseError = (
  response: Response<any>
): response is Response<Error> =>
  response != null &&
  (response as Response<Error>).body != null &&
  (response as Response<Error>).statusCode != null &&
  assertError((response as Response<Error>).body);
