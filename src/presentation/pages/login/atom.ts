import { atom } from 'recoil'

export type LoginState = {
  username: string
  password: string
  isLoginValid: boolean
}

export const loginState = atom<LoginState>({
  key: 'loginState',
  default: {
    username: '',
    password: '',
    isLoginValid: true,
  },
})
