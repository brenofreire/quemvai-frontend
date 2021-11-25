export class InvalidFieldError extends Error {
  constructor(public message: string) {
    super(message)
  }
}
