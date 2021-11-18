import { LoginAccount } from '../../../domain/usecases'
import { AxiosHttpClient } from '../../../infra/http/AxiosHttpRequester'
import { LoginAccountService } from '../../../infra/services/login-account-service'

const makeLoginAccountAuthenticator = (): LoginAccount => new LoginAccountService(new AxiosHttpClient(), 'login')

export default makeLoginAccountAuthenticator
