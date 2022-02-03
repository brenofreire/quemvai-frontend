import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols'

export class UsernameValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error | null {
    const usernameRegex = /^[a-zA-Z0-9]+$/

    if (usernameRegex.test(input)) {
      return null
    } else {
      const errorMessage = 'deve ter apenas letras e números'
      return new InvalidFieldError(errorMessage)
    }
  }
}
