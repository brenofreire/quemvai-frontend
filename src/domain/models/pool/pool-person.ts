import { PoolPersonStatusEnum } from './enums/pool-person-status-enum'

export interface PoolPerson {
  id: number

  idPool: number
  personName: string

  status: PoolPersonStatusEnum

  createdAt: string
  updatedAt: string
}
