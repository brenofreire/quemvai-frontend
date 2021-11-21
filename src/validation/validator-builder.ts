import { FieldValidation } from './protocols'
import { CompareFieldsValidation, EmailValidation, MinLengthValidation, RequiredFieldValidation } from './validators'
import { MaxLengthValidation } from './validators/max-length-validation'

export class ValidatorBuilder {
  private constructor(private readonly fieldName: string, private readonly validations: FieldValidation[]) {}

  static field(fieldName: string): ValidatorBuilder {
    return new ValidatorBuilder(fieldName, [])
  }

  email(): ValidatorBuilder {
    this.validations.push(new EmailValidation(this.fieldName))

    return this
  }

  required(): ValidatorBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))

    return this
  }

  compareAs(fieldToCompare: string): ValidatorBuilder {
    this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))

    return this
  }

  minLength(length: number): ValidatorBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))

    return this
  }

  maxLength(length: number): ValidatorBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))

    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
