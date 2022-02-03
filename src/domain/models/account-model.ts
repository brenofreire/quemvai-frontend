import { AccountStatusEnum } from './pool/enums'

export interface Account {
  id: number
  username: string
  email: string
  password: string
  status: AccountStatusEnum
  createdAt: string
  updatedAt: string
}
