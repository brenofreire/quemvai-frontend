import { FieldValidation } from '../protocols/field-validation'

export class MaxLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly maxLength: number) {}

  validate(object: any): Error | null {
    if (object[this.field].length > this.maxLength) {
      return new Error(`excedeu o tamanho máximo de ${this.maxLength} caracteres`)
    }

    return null
  }
}
