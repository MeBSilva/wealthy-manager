import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeAuthenticateValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("email").required().email().build(),
    ...ValidationBuilder.field("password").required().build(),
  ]);
