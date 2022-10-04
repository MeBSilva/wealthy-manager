import { ValidationBuilder } from "@/main/builders";

import { ValidationComposite } from "@/validation/validators";

export const makeDeleteUserValidation = (): ValidationComposite =>
  new ValidationComposite([
    ...ValidationBuilder.field("email").required().email().build(),
  ]);
