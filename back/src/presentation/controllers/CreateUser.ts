import { CreateUser } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import {
  Controller,
  HttpResponse,
  Validation,
  Response,
} from "@/presentation/protocols";

export class CreateUserController
  implements
    Controller<
      CreateUserController.Request,
      Response<CreateUserController.Result>
    >
{
  constructor(
    private readonly validation: Validation,
    private readonly createUserService: CreateUser
  ) {}

  public async handle(
    request: CreateUserController.Request
  ): Promise<HttpResponse<CreateUserController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.createUserService.create(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace CreateUserController {
  export type Request = CreateUser.Params;
  export type Result = CreateUser.Result | Error;
}
