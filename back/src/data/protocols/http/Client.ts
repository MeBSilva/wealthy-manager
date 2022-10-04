export type HttpRequest<T = any> = {
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: any;
  params?: any;
};

export interface HttpClient<T = any, R = any> {
  request: (data: HttpRequest<T>) => Promise<HttpResponse<R>>;
}

export type HttpMethod = "post" | "get" | "put" | "delete" | "patch";

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
