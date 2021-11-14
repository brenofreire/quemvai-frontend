import { Pool } from '../models/Pool'
import { UnusedKeysModel } from '../models/UnusedKeysModel'

export interface CreatePool {
  create(param: CreatePool.Params): Promise<CreatePool.Model>
}

export namespace CreatePool {
  type UnusedPoolKeys = UnusedKeysModel | 'status'

  export type Params = Omit<Pool, UnusedPoolKeys>

  export type Model = Pool
}
