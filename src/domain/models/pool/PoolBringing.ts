export interface PoolBringing {
  id: number

  idPool: number
  itemName: string
  maxQuantity?: number
  minQuantity?: number
  createdBy: number

  status: boolean

  createdAt: string
  updatedAt: string
}
