import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: any): Error | null {
    const message = `deve ter ao menos ${this.minLength} caracteres`

    return input[this.field]?.length < this.minLength ? new InvalidFieldError(message) : null
  }
}
