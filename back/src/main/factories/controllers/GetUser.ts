import { makeGetUser } from "@/main/factories/usecases";
import { makeGetUserValidation } from "@/main/factories/validation";

import { GetUserController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeGetUserController = (): Controller<
  GetUserController.Request,
  Response<GetUserController.Result>
> => new GetUserController(makeGetUserValidation(), makeGetUser());
