import { DeleteUser } from "@/domain/usecases";

import {
  badRequest,
  handleError,
  serverError,
  noContent,
} from "@/presentation/helpers";
import {
  Controller,
  HttpResponse,
  Validation,
  Response,
} from "@/presentation/protocols";

export class DeleteUserController
  implements
    Controller<
      DeleteUserController.Request,
      Response<DeleteUserController.Result>
    >
{
  constructor(
    private readonly validation: Validation,
    private readonly deleteUserService: DeleteUser
  ) {}

  public async handle(
    request: DeleteUserController.Request
  ): Promise<HttpResponse<DeleteUserController.Result>> {
    try {
      const error = this.validation.validate(request);

      if (error) return badRequest(error);

      const result = await this.deleteUserService.delete(request);

      if (!result) return serverError(new Error("Try again later."));

      return noContent();
    } catch (error) {
      return handleError(error);
    }
  }
}

export namespace DeleteUserController {
  export type Request = DeleteUser.Params;
  export type Result = DeleteUser.Result | Error;
}
