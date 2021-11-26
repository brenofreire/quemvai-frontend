import { UserLogged } from '../../domain/models'
import { makeLocalStorage } from '../factories/cache'

export const setCurrentAccountAdapter = (account: UserLogged | undefined) => {
  return makeLocalStorage().set('account', account)
}

export const getCurrentAccountAdapter = (): UserLogged => {
  return makeLocalStorage().get('account')
}
