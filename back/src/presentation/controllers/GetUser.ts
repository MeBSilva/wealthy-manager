import { GetUser } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import {
  Controller,
  HttpResponse,
  Validation,
  Response,
} from "@/presentation/protocols";

export class GetUserController
  implements
    Controller<GetUserController.Request, Response<GetUserController.Result>>
{
  constructor(
    private readonly validation: Validation,
    private readonly getUserService: GetUser
  ) {}

  public async handle(
    request: GetUserController.Request
  ): Promise<HttpResponse<GetUserController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.getUserService.get(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace GetUserController {
  export type Request = GetUser.Params;
  export type Result = GetUser.Result | Error;
}
