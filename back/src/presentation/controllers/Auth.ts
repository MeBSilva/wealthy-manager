import { Authenticate } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import {
  Controller,
  HttpResponse,
  Validation,
  Response,
} from "@/presentation/protocols";

export class AuthController
  implements
    Controller<AuthController.Request, Response<AuthController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly authService: Authenticate
  ) {}

  public async handle(
    request: AuthController.Request
  ): Promise<HttpResponse<AuthController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.authService.auth(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace AuthController {
  export type Request = Authenticate.Params;
  export type Result = Authenticate.Result | Error;
}
