import { atom } from 'recoil'
import { Account } from '../../../domain/models/Account'

export const currentAccountState = atom({
  key: 'currentAccountState',
  default: {
    getCurrentAccount: null as unknown as () => Account,
    setCurrentAccount: null as unknown as (params: Account | undefined) => void,
  },
})

export default currentAccountState
