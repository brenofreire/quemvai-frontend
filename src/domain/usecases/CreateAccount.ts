import { Account } from '../models/Account'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = {
    name: string
    email: string
    password: string
    useraname: string
    passwordConfirmation: string
  }

  export type Model = Account
}
