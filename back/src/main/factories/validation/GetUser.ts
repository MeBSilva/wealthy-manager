import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeGetUserValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("email").required().email().build(),
  ]);
