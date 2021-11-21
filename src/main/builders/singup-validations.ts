import { ValidatorBuilder } from '../../validation'
import { FieldValidation } from '../../validation/protocols'
import { Validation } from './validation'

export default class SignupValidations implements Validation {
  validations: FieldValidation[]
  validationObject: any

  constructor() {
    this.validations = [
      ...ValidatorBuilder.field('name').maxLength(64).build(),
      ...ValidatorBuilder.field('email').email().required().build(),
      ...ValidatorBuilder.field('username').required().minLength(3).build(),
      ...ValidatorBuilder.field('password').required().build(),
      ...ValidatorBuilder.field('confirmPassword').compareAs('password').required().build(),
    ]
  }

  validate(fieldName: string) {
    const validating = this.validations.filter((validation) => fieldName === validation.field)

    for (const validation of validating) {
      const error = validation.validate(this.validationObject)

      if (error) {
        return error.message
      }
    }

    return null
  }

  build(validationObject: any) {
    this.validationObject = validationObject
  }
}
