import { HttpResponseStatus } from './HttpClient'

export class HttpAccessDenied extends Error {
  constructor(public statusCode: HttpResponseStatus, public message: string) {
    super(message)
  }
}
