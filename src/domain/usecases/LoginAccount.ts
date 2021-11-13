import { Account } from '../models/Account'

export interface loginAccount {
  login(params: LoginAccount.Paranms): Promise<LoginAccount.Model>
}

export namespace LoginAccount {
  export type Paranms = {
    username: string
    password: string
  }

  export type Model = Account
}
