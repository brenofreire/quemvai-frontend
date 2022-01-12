import { Account } from '../models/account-model'

export interface LoginAccount {
  login(params: LoginAccount.Paranms): Promise<LoginAccount.Model>
}

export namespace LoginAccount {
  export type Paranms = {
    username: string
    password: string
  }

  export type Model = Account
}
