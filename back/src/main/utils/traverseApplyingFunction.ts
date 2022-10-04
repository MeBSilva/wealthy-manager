export const traverseApplyingFunction = (
  object: any,
  fun: (key: string, value: unknown) => unknown
) => JSON.parse(JSON.stringify(object, fun));
