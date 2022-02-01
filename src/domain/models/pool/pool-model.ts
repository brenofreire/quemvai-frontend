import { PoolRecurrenceEnum, PoolStatusEnum } from './enums'
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
