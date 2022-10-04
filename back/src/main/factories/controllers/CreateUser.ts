import { makeCreateUser } from "@/main/factories/usecases";
import { makeCreateUserValidation } from "@/main/factories/validation";

import { CreateUserController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeCreateUserController = (): Controller<
  CreateUserController.Request,
  Response<CreateUserController.Result>
> => new CreateUserController(makeCreateUserValidation(), makeCreateUser());
