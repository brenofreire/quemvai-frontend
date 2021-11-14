import { PoolPersonStatusEnum } from './enums/PoolPersonStatusEnum'

export interface PoolPerson {
  id: number

  idPool: number
  personName: string

  status: PoolPersonStatusEnum

  createdAt: string
  updatedAt: string
}
