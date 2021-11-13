import { AccountStatusEnum } from './AccountStatusEnum'

export interface Account {
  id: number
  name: string
  email: string
  password: string
  status: AccountStatusEnum
  createdAt: string
  updatedAt: string
}
