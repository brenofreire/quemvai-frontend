import { PoolBringing } from '../models/PoolBringing'
import { UnusedKeysModel } from '../models/UnusedKeysModel'

export interface CreatePoolBringing {
  create(params: CreatePoolBringing.Params): Promise<CreatePoolBringing.Model>
}

export namespace CreatePoolBringing {
  export type Params = Omit<PoolBringing, UnusedKeysModel>

  export type Model = PoolBringing
}
