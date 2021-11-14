import { Account } from '../models/Account'
import { UnusedKeysModelWithStatus } from '../models/UnusedKeysModel'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = Omit<Account, UnusedKeysModelWithStatus> & {
    passwordConfirmation: string
  }

  export type Model = Account
}
