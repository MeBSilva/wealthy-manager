import { InvalidParamError } from "@/presentation/errors";
import { Validation } from "@/presentation/protocols";

export class MinLengthValidation implements Validation {
  constructor(readonly fieldName: string, private readonly minLength: number) {}

  validate(input: any): Validation.Result {
    if (input[this.fieldName]?.length < this.minLength)
      return new InvalidParamError(this.fieldName);
  }
}
