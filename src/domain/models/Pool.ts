import { PoolInterest } from './PoolInterest'
import { PoolRecurrenceEnum } from './PoolRecurrenceEnum'
import { PoolStatusEnum } from './PoolStatusEnum'

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
  status: PoolStatusEnum
  free: boolean
  interests?: PoolInterest[]
  createdAt?: string
  updatedAt?: string
}