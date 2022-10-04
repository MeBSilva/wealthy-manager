import { HttpResponse } from "@/presentation/protocols";

import { traverseApplyingFunction } from "..";

export const handleBigIntResponse = (
  httpResponse: HttpResponse<any>
): HttpResponse<any> => {
  const response = { ...httpResponse };

  if (response.body == null) return httpResponse;

  response.body = traverseApplyingFunction(response.body, stringifyBigInt);

  return response;
};

const stringifyBigInt = (key: string, value: unknown) => {
  if (typeof value === "bigint") {
    return `${value}n`;
  }

  return value;
};
