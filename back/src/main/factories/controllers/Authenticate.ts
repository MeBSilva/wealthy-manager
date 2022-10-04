import { makeAuthenticate } from "@/main/factories/usecases";
import { makeAuthenticateValidation } from "@/main/factories/validation";

import { AuthController } from "@/presentation/controllers";
import { Controller, Response } from "@/presentation/protocols";

export const makeAuthController = (): Controller<
  AuthController.Request,
  Response<AuthController.Result>
> => new AuthController(makeAuthenticateValidation(), makeAuthenticate());
