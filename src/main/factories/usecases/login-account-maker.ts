import { LoginAccount } from '../../../domain/usecases'
import { AxiosHttpClient } from '../../../infra/http/axios-http-requester'
import { LoginAccountService } from '../../../infra/services'

const makeLoginAccountAuthenticator = (): LoginAccount => new LoginAccountService(new AxiosHttpClient(), 'login')

export default makeLoginAccountAuthenticator
