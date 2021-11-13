import { PoolInteractionTypeEnum } from './PoolInteractionTypeEnum'

export interface PoolInteraction {
  id: number
  idPool: number
  idUser: number
  action: PoolInteractionTypeEnum
  comment: string
  createdAt: string
  updatedAt: string
}
