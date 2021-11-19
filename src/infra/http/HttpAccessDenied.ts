import { HttpResponseStatus } from './HttpClient'

export class HttpAccessDenied {
  constructor(public statusCode: HttpResponseStatus, public message: string) {}
}
