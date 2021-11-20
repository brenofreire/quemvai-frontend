import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: any): Error | null {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
