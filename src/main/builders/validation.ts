import { FieldValidation } from '../../validation/protocols'

export interface Validation {
  validate: (fieldName: string, objectValidation: any, validations: FieldValidation[]) => string | null
}
