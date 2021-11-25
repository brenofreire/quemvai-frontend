import { UserLogged } from '../../domain/models'
import { AddAccount } from '../../domain/usecases'
import { mockLoggedAccount } from '../../presentation/pages/signup/mocks'

export default class SignUpService implements AddAccount {
  add(_: AddAccount.Params): Promise<UserLogged> {
    return new Promise((res) => {
      res(mockLoggedAccount)
    })
  }
}
