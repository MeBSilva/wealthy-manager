import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeUpdateUserValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("email").email().build(),
    ...ValidationBuilder.field("password").min(10).build(),
    ...ValidationBuilder.field("passwordConfirmation")
      .min(10)
      .sameAs("password")
      .build(),
  ]);
