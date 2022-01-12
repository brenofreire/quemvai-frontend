import { UserLogged } from '../models'
import { Account } from '../models/account-model'
import { UnusedKeysModelWithStatus } from '../models/unused-keys-model'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = Omit<Account, UnusedKeysModelWithStatus> & {
    passwordConfirmation: string
  }

  export type Model = UserLogged
}
