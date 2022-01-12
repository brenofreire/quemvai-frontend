import { AxiosHttpClient } from '../../../infra/http/axios-http-requester'

const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()

export default makeAxiosHttpClient
