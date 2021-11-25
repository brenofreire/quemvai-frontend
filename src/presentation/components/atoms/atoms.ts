import { atom } from 'recoil'
import { UserLogged } from '../../../domain/models'

export const currentAccountState = atom({
  key: 'currentAccountState',
  default: {
    getCurrentAccount: null as unknown as () => UserLogged,
    setCurrentAccount: null as unknown as (params: UserLogged | undefined) => void,
  },
})

export default currentAccountState
