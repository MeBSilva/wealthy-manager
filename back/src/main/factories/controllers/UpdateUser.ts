import { makeUpdateUser } from "@/main/factories/usecases";
import { makeUpdateUserValidation } from "@/main/factories/validation";

import { UpdateUserController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeUpdateUserController = (): Controller<
  UpdateUserController.Request,
  Response<UpdateUserController.Result>
> => new UpdateUserController(makeUpdateUserValidation(), makeUpdateUser());
