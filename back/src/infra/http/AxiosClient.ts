import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { HttpClient, HttpRequest, HttpResponse } from "@/data/protocols/http";

const isAxiosError = (err: Error): err is AxiosError => axios.isAxiosError(err);

export class AxiosHttpClient implements HttpClient {
  private readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    this.interceptorClient(this.instance);
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    const axiosResponse: AxiosResponse = await this.instance.request({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
      params: data.params,
    });

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  private interceptorClient(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (err: Error | AxiosError) => {
        if (isAxiosError(err)) {
          if (err.request) {
            // console.log(err.request);
            throw {
              body: new Error("Failed to send request."),
              statusCode: 500,
            } as HttpResponse<Error>;
          }
        }
        // console.log(err);
        throw {
          body: err,
          statusCode: 500,
        } as HttpResponse<Error>;
      }
    );

    instance.interceptors.response.use(
      (response) => response,

      (err: Error | AxiosError) => {
        if (isAxiosError(err)) {
          if (err.response) {
            // console.log(err.response);
            throw {
              body: err.response.data,
              statusCode: err.response.status,
            } as HttpResponse<Error>;
          }
        }

        // console.log(err);
        throw {
          body: err,
          statusCode: 500,
        } as HttpResponse<Error>;
      }
    );
  }
}
