import { Account } from '../../domain/models/Account'
import { LocalStorageAdapter } from '../../infra/cache'

export const setCurrentAccountAdapter = (account: Account | undefined) => {
  return new LocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = () => {
  return new LocalStorageAdapter().get('account')
}
