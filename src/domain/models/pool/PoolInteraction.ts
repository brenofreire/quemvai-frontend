import { PoolInteractionTypeEnum } from './enums/PoolInteractionTypeEnum'

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
