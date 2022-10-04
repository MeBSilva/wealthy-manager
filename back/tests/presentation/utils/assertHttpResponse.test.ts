import { assertHttpResponse } from "@/presentation/utils";

test("Assert Error", () => {
  const error = new Error("error");
  const response = { body: "body", statusCode: 200 };
  const notResponse = { body: "body", statusCode: 300 };

  expect(assertHttpResponse(error)).toBe(false);
  expect(assertHttpResponse(response)).toBe(true);
  expect(assertHttpResponse(notResponse)).toBe(false);
});
