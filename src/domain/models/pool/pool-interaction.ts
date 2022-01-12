import { PoolInteractionTypeEnum } from './enums/pool-interaction-type-enum'

export interface PoolInteraction {
  id: number

  idPool: number
  idUser: number
  action: PoolInteractionTypeEnum
  comment: string
  personName: string
  personImg: string

  status: boolean

  createdAt: string
  updatedAt: string
}
