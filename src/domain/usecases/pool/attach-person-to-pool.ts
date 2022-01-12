import { PoolPerson } from '../../models/pool/pool-person'
import { UnusedKeysModel } from '../../models/unused-keys-model'

export interface AttachPersonToPool {
  attach(params: AttachPersonToPool.Params): Promise<AttachPersonToPool.Model>
}

export namespace AttachPersonToPool {
  export type Params = Omit<PoolPerson, UnusedKeysModel>

  export type Model = PoolPerson
}
