import { atom } from 'recoil'
import { Account } from '../../../domain/models/Account'

export const currentAccountState = atom<Account | undefined>({
  key: 'currentAccountState',
  default: undefined,
})

export default currentAccountState
