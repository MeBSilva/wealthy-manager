import { UpdateUser } from "@/domain/usecases";

import { badRequest, ok, handleError } from "@/presentation/helpers";
import {
  Controller,
  HttpResponse,
  Validation,
  Response,
} from "@/presentation/protocols";

export class UpdateUserController
  implements
    Controller<
      UpdateUserController.Request,
      Response<UpdateUserController.Result>
    >
{
  constructor(
    private readonly validation: Validation,
    private readonly updateUserService: UpdateUser
  ) {}

  public async handle(
    request: UpdateUserController.Request
  ): Promise<HttpResponse<UpdateUserController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.updateUserService.update(request);

      return ok(result);
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace UpdateUserController {
  export type Request = UpdateUser.Params;
  export type Result = UpdateUser.Result | Error;
}
