import { PoolPerson } from '../../models/pool/PoolPerson'
import { UnusedKeysModel } from '../../models/UnusedKeysModel'

export interface AttachPersonToPool {
  attach(params: AttachPersonToPool.Params): Promise<AttachPersonToPool.Model>
}

export namespace AttachPersonToPool {
  export type Params = Omit<PoolPerson, UnusedKeysModel>

  export type Model = PoolPerson
}
