import { assertError } from "@/presentation/utils";

test("Assert Error", () => {
  const error = new Error("error");
  const notError = null;
  const notError2 = { stack: "stack", name: "Error", message: "message" };

  expect(assertError(error)).toBe(true);
  expect(assertError(notError)).toBe(false);
  expect(assertError(notError2)).toBe(false);
});
