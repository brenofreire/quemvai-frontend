import { PoolPersonStatusEnum } from './PoolPersonStatusEnum'

export interface PoolPerson {
  id: number
  idPool: number
  status: PoolPersonStatusEnum
  createdAt: string
  updatedAt: string
}
