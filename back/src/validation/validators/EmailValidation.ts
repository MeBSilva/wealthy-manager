import { InvalidParamError } from "@/presentation/errors";
import { Validation } from "@/presentation/protocols";

export class EmailValidation implements Validation {
  constructor(readonly fieldName: string) {}

  validate(input: any): Validation.Result {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (
      !input[this.fieldName] ||
      (input[this.fieldName] && !emailRegex.test(input[this.fieldName]))
    )
      return new InvalidParamError(this.fieldName);
  }
}
