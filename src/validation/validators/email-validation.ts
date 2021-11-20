import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols/index'

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error | null {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return !input[this.field] || emailRegex.test(input[this.field]) ? null : new InvalidFieldError()
  }
}
