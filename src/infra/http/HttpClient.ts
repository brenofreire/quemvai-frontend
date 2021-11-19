type HttpMethods = 'post' | 'get' | 'put' | 'delete'

export enum HttpResponseStatus {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpRequest = {
  method: HttpMethods
  url: string
  body?: any
  headers?: any
}

export type HttpResponse = {
  body?: any
  statusCode: HttpResponseStatus
}

export interface HttpClient {
  request(data: HttpRequest): Promise<any>
}
