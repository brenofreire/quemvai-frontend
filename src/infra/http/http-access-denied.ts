import { HttpResponseStatus } from './http-client'

export class HttpAccessDenied extends Error {
  constructor(public statusCode: HttpResponseStatus, public message: string) {
    super(message)
  }
}
