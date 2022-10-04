import { Request } from "express";

import { traverseApplyingFunction } from "..";

export const handleRequestParams = (req: Request): any => {
  const { body } = req;
  let { params, query } = req;

  params = traverseApplyingFunction(params, parseRequestParams);
  query = traverseApplyingFunction(query, parseRequestParams);

  return { ...body, ...params, ...query };
};

const parseRequestParams = (key: string, value: unknown) => {
  if (typeof value === "string") {
    const regExp = /\d+$/;

    let parsedValue: string | number = value;

    if (value.match(regExp)) {
      parsedValue = parseInt(value, 10);
    }

    return parsedValue;
  }
  return value;
};
