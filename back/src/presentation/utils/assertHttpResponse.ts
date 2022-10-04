import { HttpResponse, HttpStatusCode } from "@/presentation/protocols";

export const assertHttpResponse = (
  response: unknown
): response is HttpResponse =>
  (response as HttpResponse).body != null &&
  (response as HttpResponse).statusCode != null &&
  Object.values(HttpStatusCode).includes((response as HttpResponse).statusCode);
