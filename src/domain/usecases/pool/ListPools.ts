import { Pool } from '../../models/pool/Pool'
import { PoolInterest } from '../../models/pool/PoolInterest'

export interface ListPools {
  listAll(params: ListPools.Params): Promise<ListPools.Model>
}

export namespace ListPools {
  export type Params = {
    offset?: number
    interest?: PoolInterest[]
    free?: boolean
  }

  export type Model = Pool[]
}
