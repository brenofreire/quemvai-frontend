import { PoolInterest } from './PoolInterest'
import { PoolRecurrenceEnum } from './enums/PoolRecurrenceEnum'
import { PoolStatusEnum } from './enums/PoolStatusEnum'

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
