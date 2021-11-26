import { AxiosHttpClient } from '../../../infra/http/AxiosHttpRequester'

const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()

export default makeAxiosHttpClient
