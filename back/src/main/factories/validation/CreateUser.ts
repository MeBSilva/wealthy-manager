import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeCreateUserValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("email").required().email().build(),
    ...ValidationBuilder.field("password").required().min(10).build(),
    ...ValidationBuilder.field("passwordConfirmation")
      .required()
      .min(10)
      .sameAs("password")
      .build(),
    ...ValidationBuilder.field("authorizationLevel").required().build(),
    ...ValidationBuilder.field("name").required().build(),
  ]);
