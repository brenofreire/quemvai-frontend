import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols/index'

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error | null {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !input[this.field] || emailRegex.test(input[this.field]) ? null : new InvalidFieldError('deve ser válido')
  }
}
