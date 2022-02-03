import { InvalidFieldError } from '../errors'
import { FieldValidation } from '../protocols'

export class PasswordValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error | null {
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*\?_]{6,}$/

    if (passwordRegex.test(input[this.field])) {
      return null
    } else {
      return new InvalidFieldError('deve ter letras maiúsculas e minúsculas e números')
    }
  }
}
