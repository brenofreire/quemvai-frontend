import { PoolRecurrenceEnum } from './enums/pool-eecurrence-enum'
import { PoolStatusEnum } from './enums/pool-status-enum'
import { PoolInterest } from './pool-interest'

export interface Pool {
  id: number

  img?: string
  title: string
  startDate: string
  endDate?: string
  startHour?: string
  endHour?: string
  description?: string
  duringAllDay?: boolean
  private: boolean
  location?: string
  createdBy: number
  recurrence?: PoolRecurrenceEnum
  free: boolean
  interests?: PoolInterest[]

  status: PoolStatusEnum

  createdAt?: string
  updatedAt?: string
}
