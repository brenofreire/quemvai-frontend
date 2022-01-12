import { Account } from '.'

export type UserLogged = Account & {
  accessToken: string
}
