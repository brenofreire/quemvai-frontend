import { Pool } from '../models/Pool'
import { PoolInterest } from '../models/PoolInterest'

export interface ListPools {
  listAll(params: ListPools.Params): Promise<ListPools.Model>
}

export namespace ListPools {
  export type Params = {
    offset?: number
    interest?: PoolInterest[]
    free?: boolean
  }

  export type Model = Pool
}
