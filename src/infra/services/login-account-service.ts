import { LoginAccount } from '../../domain/usecases'
import { HttpClient } from '../http/HttpClient'

export default class LoginAccountService implements LoginAccount {
  constructor(private readonly httpClient: HttpClient, private readonly url: string) {}

  login(params: LoginAccount.Paranms): Promise<LoginAccount.Model> {
    return this.httpClient.request({
      method: 'post',
      url: this.url,
      body: params,
    })
    // {
    //   id: 1,
    //   createdAt: new Date().toISOString(),
    //   email: 'fake@example.com',
    //   name: 'Fake Name',
    //   password: 'fake!password',
    //   status: AccountStatusEnum.ACTIVE,
    //   updatedAt: new Date().toISOString(),
    // }
  }
}
