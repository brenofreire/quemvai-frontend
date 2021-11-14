import { Account } from '../models/Account'
import { UnusedKeysModel } from '../models/UnusedKeysModel'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = Omit<Account, UnusedKeysModel | 'status'> & {
    passwordConfirmation: string
  }

  export type Model = Account
}
