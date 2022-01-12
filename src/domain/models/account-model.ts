import { AccountStatusEnum } from './account-status-enum'

export interface Account {
  id: number
  username: string
  email: string
  password: string
  status: AccountStatusEnum
  createdAt: string
  updatedAt: string
}
