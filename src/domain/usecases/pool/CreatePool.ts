import { Pool } from '../../models/pool/Pool'
import { UnusedKeysModelWithStatus } from '../../models/UnusedKeysModel'

export interface CreatePool {
  create(param: CreatePool.Params): Promise<CreatePool.Model>
}

export namespace CreatePool {
  export type Params = Omit<Pool, UnusedKeysModelWithStatus>

  export type Model = Pool
}
