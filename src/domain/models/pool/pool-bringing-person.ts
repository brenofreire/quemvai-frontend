export interface PoolBringingPerson {
  id: number

  idUser: number
  idBringing: number
  idPool: number
  quantity: number
  personName: string

  status: boolean

  createdAt: string
  updatedAt: string
}
