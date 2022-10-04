import { makeDeleteUser } from "@/main/factories/usecases";
import { makeDeleteUserValidation } from "@/main/factories/validation";

import { DeleteUserController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeDeleteUserController = (): Controller<
  DeleteUserController.Request,
  Response<DeleteUserController.Result>
> => new DeleteUserController(makeDeleteUserValidation(), makeDeleteUser());
