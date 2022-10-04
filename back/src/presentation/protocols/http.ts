export type HttpMethod = "delete" | "get" | "patch" | "post" | "put";

export type HttpRequest<T = any> = {
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: any;
  params?: any;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body: T;
};

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}
