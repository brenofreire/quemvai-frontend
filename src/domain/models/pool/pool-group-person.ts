import { PersonStatusInPoolGroup } from './enums'

export interface PoolGroupPerson {
  id: number

  idPoolGroup: number
  idPerson: number
  personName: string
  personImg: string
  personStatusInGroup?: PersonStatusInPoolGroup

  status: boolean

  createdAt: string
  updatedAt: string
}
