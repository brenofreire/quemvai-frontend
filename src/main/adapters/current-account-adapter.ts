import { UserLogged } from '../../domain/models'
import { LocalStorageAdapter } from '../../infra/cache'

export const setCurrentAccountAdapter = (account: UserLogged | undefined) => {
  return new LocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): UserLogged => {
  return new LocalStorageAdapter().get('account')
}
