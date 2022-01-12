import { Pool } from '../../models/pool/pool-model'
import { UnusedKeysModelWithStatus } from '../../models/unused-keys-model'

export interface CreatePool {
  create(param: CreatePool.Params): Promise<CreatePool.Model>
}

export namespace CreatePool {
  export type Params = Omit<Pool, UnusedKeysModelWithStatus>

  export type Model = Pool
}
